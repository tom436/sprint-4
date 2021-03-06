import React from 'react';

import { loadItems } from '../store/actions/itemActions.js'
import { removeItem } from '../store/actions/itemActions.js'
import { loadShop, saveShop } from '../store/actions/shopActions.js'
import { loadOrders,saveOrder } from '../store/actions/orderActions.js'
import userService from '../services/userService'
import { BackItemList } from '../cmps/BackItemList'
import { OrderList } from '../cmps/OrderList'
import SocketService from '../services/SocketService';

import { connect } from 'react-redux';

class ShopManage extends React.Component {

    state = {

    }

    componentDidMount() {
        const user = userService.getUser()
        SocketService.setup();
        SocketService.emit('farm id', user.shopId);
        SocketService.on('farm addOrder', this.addOrder);
        this.props.loadShop(user.shopId)
        this.props.loadItems(user.shopId)
        
        this.props.loadOrders(user.shopId)
    }
    componentWillUnmount() {
        SocketService.off('farm addOrder', this.addOrder);
    }
    onHandleChange = (ev) => {
    }
    addOrder = () => {
        const user = userService.getUser()
        this.props.loadOrders(user.shopId)
    };

    onReact = (shopperId,reaction) => {
        SocketService.emit('shopper id',shopperId);
        SocketService.emit('react', reaction);
    };

    render() {
        
        const { shop, items,orders } = this.props
        return !shop ? 'You dont have a shop' : <section className="grid-container">
            <h2>{shop.name}</h2>
            <h3>Orders</h3>
            {orders&&<OrderList orders={orders} shop={shop} saveOrder={this.props.saveOrder} onReact={this.onReact}/>}
            <h3>Edit Shop</h3>
            <BackItemList remove={this.props.removeItem} items={items}  />
        </section>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.item.items,
        shop: state.shop.currShop,
        orders:state.order.orders
    }
}

const mapDispatchToProps = {
    loadItems,
    loadShop,
    removeItem,
    saveShop,
    loadOrders,
    saveOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopManage)