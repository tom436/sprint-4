import React from 'react';
import { loadItems } from '../store/actions/itemActions.js'

import shopService from '../services/shopService'
import itemService from '../services/itemService.js'
import MapContainer from '../cmps/MapContainer'
import ItemList from '../cmps/ItemList'
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
        // this.setState({ sortBy: ev.target.value })
        console.log(ev.target.value);

        this.props.loadItems({ searchValue: id }, ev.target.value)

    }





    render() {

        const { shop } = this.state
        if (!shop) return <div>Loading....</div>

        return <section>
            <section className="Shope-info">
                <img src="" />
                <img className="shop-logo" src={shop.logo} />
                <h2>Store Name: {shop.name}</h2>
                <h4>{shop.about}</h4>
                {/* <div className="shop-map">
                    <MapContainer />
                </div> */}

                <form>
                    <select name="sort" onChange={this.onHandleChange}>
                        <option value="" >Sort By</option>
                        <option value="byHighPrice" >By Highest Price</option>
                        <option value="byLowPrice" >By Lowest Price</option>
                    </select>
                </form>

                <div className="shop-interact">
                    <button >Reviews</button>
                    <button >More</button>
                    <button >Send a Message</button>
                </div>

                {this.props.items.map((item, idx) => {
                    return <img key={idx} src={item.img}></img>
                })}

            </section>

           <ItemList items={this.props.items}/>
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