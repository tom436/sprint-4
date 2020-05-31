
import React from 'react';
import { connect } from 'react-redux';
import { CartItemsList } from '../cmps/CartItemsList'
import { loadCart, remove, getTotalPrice, checkout } from '../store/actions/userActions'
import { saveShop, loadShops } from '../store/actions/shopActions'
import cartService from '../services/cartService'
import { Modal } from '../cmps/Modal'
class Cart extends React.Component {

    state = {
        class: ''
    }
    componentDidMount() {
        this.props.loadCart()
        this.props.getTotalPrice()
        this.props.loadShops();
    }
    componentDidUpdate() {
        this.props.getTotalPrice()
    }
    componentWillUnmount() {
    }
    onOpenModal = () => {
        cartService.newOrder().then(orders => {
            console.log(orders);
            orders.map(order => {
                this.props.shops.map(shop => {
                    if (order.shopId === shop._id) {                        
                        shop.orders.push(order)
                        this.props.saveShop(shop)
                    }
                })
            })

        })

        this.setState({
            class: 'block'
        })
       
    }
    onCloseModal = () => {
        this.setState({
            class: ''
        })
        
    }


    render() {
        const { cart, remove, totalPrice } = this.props
        return (
            <section className="grid-container flex space-around">
                <h2>CART</h2>
                <div className="cart-container">
                    <div className='items-container flex column'>
                        {cart.map((cartItem, idx) => {
                            return <ul key={idx}>
                                <li className="shop-title">{cartItem.items[0] && cartItem.items[0].shop.name}</li>
                                <CartItemsList items={cartItem.items} remove={remove} />
                            </ul>
                        })}
                    </div>
                    <Modal onCloseModal={this.onCloseModal} showMode={this.state.class} />
                    <div className="payment-container flex column space-between ">
                        <h2 >TOTAL: {totalPrice ? `$${totalPrice}` : '0'} </h2>
                        <h4>You are supporting {cart.length} farms!</h4>
                        <button className="checkout-btn green" onClick={() => {
                            
                            this.onOpenModal()
                        }}>Checkout</button>

                        <h3 className="">WE ACCEPT:</h3>

                        <div className="payment-method">
                            <span className="fab fa-cc-paypal "></span>
                            <span className="fab fa-cc-mastercard"></span>
                            <span className="fab fa-cc-diners-club"></span>
                            <span className="fab fa-bitcoin"></span>
                            <span className="fab fa-cc-visa"></span>
                        </div>

                    </div>
                </div>
            </section>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        cart: state.user.cart,
        totalPrice: state.user.totalPrice,
        shops: state.shop.shops

    }
}
const mapDispatchToProps = {
    getTotalPrice,
    loadCart,
    remove,
    saveShop,
    loadShops
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
