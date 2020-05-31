import React from 'react';

import { loadItems } from '../store/actions/itemActions.js'
import { removeItem } from '../store/actions/itemActions.js'
import { loadShop,saveShop } from '../store/actions/shopActions.js'
import userService from '../services/userService'
import {BackItemList} from '../cmps/BackItemList'
import {OrderList} from '../cmps/OrderList'

import { connect } from 'react-redux';

class ShopManage extends React.Component {

    state = {

    }

    componentDidMount() {
        const user = userService.getUser()
        this.props.loadShop(user.shopId)
        this.props.loadItems(user.shopId)
        

    }
    componentDidUpdate() {

        
    }
    onHandleChange = (ev) => {
    }


    render() {
        const { shop, items } = this.props
        return !shop ? 'You dont have a shop' : <section className="grid-container">
            <h2>{shop.name}</h2>
            <h3>Orders</h3>
            <OrderList shop={shop} save={this.props.saveShop}/>
            <h3>Edit Shop</h3>
            <BackItemList remove={this.props.removeItem} items={items}/>
        </section>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.item.items,
        shop: state.shop.currShop,
    }
}

const mapDispatchToProps = {
    loadItems,
    loadShop,
    removeItem,
     saveShop
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopManage)