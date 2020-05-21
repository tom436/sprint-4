import React from 'react';
import shopService from '../services/shopService'
import itemService from '../services/itemService.js'
import MapContainer from '../cmps/MapContainer'





export default class ShopDetails extends React.Component {

    state = {
        shop: null,
    }


    componentDidMount() {
        console.log('did mount')
        this.loadShop()
        this.loadShopItems()

    }

    loadShop() {
        const id = this.props.match.params.id
        shopService.getById(id)
            .then(shop => {
                this.setState({ shop })
                console.log(shop)
            })
    }

    loadShopItems() {
        itemService.query()
            .then(items => {
                this.setState({ items })
                // console.log('store items',items);
                console.log('this state', this.state);
            })
    }




    render() {

        const { shop, items } = this.state
        if (!shop) return <div>Loading....</div>

        return <section>
            <section className="Shope-info">
                <img src="" />
                <img className="shop-logo" src={shop.logo} />
                <h2>Store Name: {shop.name}</h2>
                <h4>{shop.about}</h4>
                <div className="shop-map">
                    <MapContainer />
                </div>

                <div className="shop-interact">
                    <button >Reviews</button>
                    <button >More</button>
                    <button >Send a Message</button>
                </div>
            </section>

            <section className="shops-items">
            </section>

        </section>
    }


}

