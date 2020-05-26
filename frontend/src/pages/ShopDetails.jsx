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
        isMore: ""
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.loadShop()
        this.props.loadItems({ searchValue: id }, this.state.sortBy);
    }

    loadShop = () => {
        const id = this.props.match.params.id
        shopService.getById(id)
            .then(shop => {
                console.log(shop);  
                return this.setState({ shop })
            })
    }

    onHandleChange = (ev) => {
        const id = this.props.match.params.id
        this.props.loadItems({ searchValue: id }, ev.target.value)
    }

    getMoreDet = () => {
        this.setState.isMore = "none"
        console.log('change state', this.setState.isMore);

    }


    render() {

        const { shop } = this.state
        const { isMore } = this.state
        if (!shop) return <div>Loading....</div>

        return <section>
            <section className="Shope-info flex column ">
            
                <img className="farm-photo" src={shop.aboutImg} />
                <img className="shop-logo" src={shop.logo} />
                <h2 className="center-item">Store Name: {shop.name}</h2>
                <p className="shop-about center-item">{shop.about}</p>


                <div className="shop-interact center-item">
                    <button className="shop-btn" onClick={this.getMoreDet}>More</button>
                    <button className="shop-btn">Send a Message</button>
                    <div className={this.state.isMore}>
                    <MoreDet  shop={shop} isMore={isMore} />
                    </div>
                </div>
                
                {/* <div className="shop-map">
                    <MapContainer />
                </div> */}




                {/* {shop.isMore? "more-det-active":"more-det"} */}
            </section>
            <form action="" onSubmit={this.onSearchSub}>
                <input type="text" placeholder="Search item In Shop" />
                <button>Search</button>
            </form>
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