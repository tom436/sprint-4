import React from 'react';
import shopService from '../services/shop.service'



export default class ShopDetails extends React.Component {

    state = {
        shop: null
    }



    componentDidMount() {
        console.log('did mount')
        this.loadShop()

    }

    loadShop() {
<<<<<<< HEAD
        const id = this.props.match.params.id
=======
        console.log('load shop');
        
        const id = this.props.match.params.id
        console.log('id', id);
        
>>>>>>> 66fcc45668fe2563a7922d7f2943f40403fc0b9b
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

