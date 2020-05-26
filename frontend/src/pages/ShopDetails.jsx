import React from 'react';
import { loadItems } from '../store/actions/itemActions.js'

import shopService from '../services/shopService'
import itemService from '../services/itemService.js'

import { ItemList } from '../cmps/ItemList'
import MoreDet from '../cmps/MoreDet'
import { connect } from 'react-redux';

class ShopDetails extends React.Component {

    state = {
        shop: null,
        sortBy: null,
        isMore: false
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.loadShop()
        this.props.loadItems(id, this.state.sortBy);
    }

    loadShop = () => {
        const id = this.props.match.params.id
        shopService.getById(id)
            .then(shop => {
                console.log(shop);  
                return this.setState({ shop })
            })


    }

    addReview = (reviewToAdd) => {
        console.log(reviewToAdd);

        const shop = this.state.shop
        console.log(shop);
        shop.reviews.push(reviewToAdd)
        console.log(shop);


        shopService.save(shop)
            .then(res => this.loadShop())


    }


    onHandleChange = (ev) => {
        const id = this.props.match.params.id
        this.props.loadItems({ searchValue: id }, ev.target.value)
    }

    getMoreDet = () => {
        const currentState = this.state.isMore;
        this.setState({ isMore: !currentState });
    }


    render() {
        const { shop } = this.state
        if (!shop) return <div>Loading....</div>

        return <section className="">
            <section className="shope-info flex column">

                <img className="farm-photo" src={shop.aboutImg} />
                <img className="shop-logo" src={shop.logo} />
                <h2 className="center-item">Store Name: {shop.name}</h2>
                <p className="shop-about center-item">{shop.about}</p>


                <div className="shop-interact space-around">
                    <button className="shop-btn " onClick={this.getMoreDet}>More</button>
                    <button className="shop-btn ">Send a Message</button>
                </div>
                <div className={"more-det" + (this.state.isMore ? "-active" : "")}>
                    <MoreDet shop={shop} addReview={this.addReview} />
                </div>

                {/* <div className="shop-map">
                    <MapContainer />
                </div> */}




                {/* {shop.isMore? "more-det-active":"more-det"} */}
            </section>
            {/* <form action="" onSubmit={this.onSearchSub}>
                <input type="text" placeholder="Search item In Shop" />
                <button>Search</button>
            </form> */}
            <form>
                <select name="sort" onChange={this.onHandleChange}>
                    <option value="" >Sort By</option>
                    <option value="highToLow" >By Highest Price</option>
                    <option value="lowToHigh" >By Lowest Price</option>
                </select>
            </form>
            <ItemList items={this.props.items} />

        </section>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.item.items
    }
}

const mapDispatchToProps = {
    loadItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetails)