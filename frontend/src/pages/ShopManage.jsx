import React from 'react';

import {Route, Switch,  NavLink, Link } from "react-router-dom";
import { loadItems } from '../store/actions/itemActions.js'
import { loadShop } from '../store/actions/shopActions.js'
import shopService from '../services/shopService'
// import { SellerProfile, SellerOrders, ItemsEdit } from '../cmps/ShopEdit'
import   ItemsEdit  from '../cmps/ItemsEdit'
import   {ItemList}  from '../cmps/ItemList'
import MoreDet from '../cmps/MoreDet'
import { connect } from 'react-redux';

class ShopManage extends React.Component {

    state = {
        shop: {
            aboutImg:'https://cdn.pixabay.com/photo/2016/06/15/20/27/monochrome-1459868_960_720.jpg' ,
            logo:'https://image.flaticon.com/icons/svg/2921/2921914.svg' ,
            name: 'The Shop\'s Name',
            about: 'A short description to describe your shop!'
        },
        sortBy: null,
        isMore: "",
        items:null
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id) {
            this.props.loadShop(id)
                .then(shop => {
                    this.props.loadItems({ searchValue: id }, this.state.sortBy)
                    .then(items=>this.setState({ shop,items }))
                })
        }
    }

    onHandleChange = (ev) => {
        const id = this.props.match.params.id
        this.props.loadItems({ searchValue: id }, ev.target.value)
    }

    // getMoreDet = () => {
    //     this.setState.isMore = "none"
    //     console.log('change state', this.setState.isMore);
    // }

    render() {
        const { shop,items } = this.state
        // const { isMore } = this.state
        return <section>
                <section className="Shope-info flex column">
                    <img className="farm-photo" src={shop.aboutImg} />
                    <img className="shop-logo" src={shop.logo} />
                    <h2 className="center-item"> {shop.name}</h2>
                    <p className="shop-about center-item">{shop.about}</p>
                </section>
                <section className="side-nav">
                    <ul className="main-nav flex column">
                        <li><NavLink to="/shop/manage/:id?" exact>items ></NavLink></li>
                        {/* <li><NavLink to="/shop/manage/:id?/profile" exact >Profile ></NavLink></li> */}
                        {/* <li><NavLink to="/shop/manage/:id?/orders" exact>orders ></NavLink></li> */}
                    </ul>
                </section>
                <section className="work-area">
                    <Switch>
                        {/* <Route component={SellerProfile} path="/shop/manage/:id?/profile" />
                        <Route component={SellerOrders} path="/shop/manage/:id?/orders" /> */}
                        <Route path="/shop/manage/:id?" component={()=>
                            <ItemsEdit shop={this.state.shop} items={this.state.items}/>} />
                    </Switch>
                </section>
                {/* <form action="" onSubmit={this.onSearchSub}>
                <input type="text" placeholder="Search item In Shop" />
                <button>Search</button>
            </form> */}
                {/* <form>
                <select name="sort" onChange={this.onHandleChange}>
                    <option value="" >Sort By</option>
                    <option value="highToLow" >By Highest Price</option>
                    <option value="lowToHigh" >By Lowest Price</option>
                </select>
            </form> */}
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