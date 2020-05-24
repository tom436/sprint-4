import React from 'react';
import { loadItems } from '../store/actions/itemActions.js'

import shopService from '../services/shopService'
import itemService from '../services/itemService.js'
import MapContainer from '../cmps/MapContainer'
import { ItemList } from '../cmps/ItemList'
import { connect } from 'react-redux';

class ShopDetails extends React.Component {

    state = {
        shop: null,
        sortBy: null,
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.loadShop()
        this.props.loadItems({ searchValue: id }, this.state.sortBy);
    }

    loadShop = () => {
        const id = this.props.match.params.id
        console.log('id', id);
        shopService.getById(id)
            .then(shop => {
                this.setState({ shop })
            })
    }

    onHandleChange = (ev) => {
        const id = this.props.match.params.id
        console.log(ev.target.value);
        this.props.loadItems({ searchValue: id }, ev.target.value)
    }

    render() {

        const { shop } = this.state
        if (!shop) return <div>Loading....</div>

        return <section>
            <section className="shope-info flex">
                <img className="shop-logo" src={shop.logo} />
                <div className="flex column space-between">
                <h2>{shop.name}</h2>
                <h4>{shop.about}</h4>
                <div className="shop-interact">
                    <button >Reviews</button>
                    <button >More</button>
                    <button >Send a Message</button>
                </div>
                </div>
                {/* <div className="shop-map">
                    <MapContainer />
                </div> */}






            </section>
            <input type="text" placeholder="Search item In Shop"/>
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