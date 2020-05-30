import React from 'react';

import {Route, Switch,  NavLink, Link } from "react-router-dom";
import { loadItems } from '../store/actions/itemActions.js'
import { loadShop } from '../store/actions/shopActions.js'
import shopService from '../services/shopService'
// import { SellerProfile, SellerOrders, ItemsEdit } from '../cmps/ShopEdit'
import   ItemsEdit  from '../cmps/ItemsEdit'
import   {ItemList}  from '../cmps/ItemList'
import { connect } from 'react-redux';

class ShopManage extends React.Component {

    state = {

    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.loadShop()
    }

    onHandleChange = (ev) => {
        // const id = this.props.match.params.id
        // this.props.loadItems({ searchValue: id }, ev.target.value)
    }


    render() {
        const { shop,items } = this.state
        // const { isMore } = this.state
        return <section>

            </section>
    }
}

const mapStateToProps = (state) => {
    return {
        // items: state.item.items,
        shop: state.shop.currShop
    }
}

const mapDispatchToProps = {
    loadItems,
    loadShop
    // removeItem,
    // addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopManage)