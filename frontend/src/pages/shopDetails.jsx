import React from 'react';
import shopService from '../services/shop.service'

var shopId = "v101"

export default class ShopDetails extends React.Component {

    state = {
        shop: null
    }



    componentDidMount() {
        console.log('did mount')
        this.loadShop()

    }

    loadShop() {
        const id = this.props.match.params.theShopId
        shopService.getById(id)
            .then(shop => {
                console.log(shop)
                this.setState({ shop })
            })
    }





    render() {

        return <section>
            <section className="Shope-info">
                <img src="" />
                <p>Store Name</p>
                <p>location</p>
            </section>

        </section>
    }


}

