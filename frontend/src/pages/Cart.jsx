
import React from 'react';
import { connect } from 'react-redux';
import { CartItemsList } from '../cmps/CartItemsList'
import { loadCart, remove, getTotalPrice,clearCount } from '../store/actions/userActions'
import { saveOrder } from '../store/actions/orderActions'
import cartService from '../services/cartService'
import { Modal } from '../cmps/Modal'
import SocketService from '../services/SocketService';

class Cart extends React.Component {

    state = {
        class: ''
    }
    componentDidMount() {
        SocketService.setup();

        this.props.loadCart()
        this.props.getTotalPrice()
    }
    componentDidUpdate() {
        this.props.getTotalPrice()
    }

    onCheckOut= () => {
        cartService.newOrder().then(orders => {
            orders.forEach(order => {         
                this.props.saveOrder(order)       
                SocketService.emit('farm id', order.shopId);
                SocketService.emit('farm newOrder', order);
            })
        })
        this.setState({
            class: 'block'
        })
        this.props.clearCount()
       
    }
    onCloseModal = () => {
        this.setState({
            class: ''
        })
    }

    render() {
        const { cart, remove, totalPrice } = this.props
        return (!this.props.cart)?<p>loading</p>:( 
            <section className="grid-container flex space-around cart-wide">
                <h2>CART</h2>
                <div className="cart-container">
                    <div className='items-container flex column'>
                        {cart.map((cartItem, idx) => {
                            return <ul key={idx}>
                                <li className="shop-title">{cartItem.items && cartItem.shopName}</li>
                                <CartItemsList items={cartItem.items} remove={remove} />
                            </ul>
                        })}
                    </div>
                    <Modal onCloseModal={this.onCloseModal} showMode={this.state.class} />
                    <div className="payment-container flex column space-between ">
                        <h2 >TOTAL: {totalPrice ? `$${totalPrice}` : '0'} </h2>
                        <h4>You are supporting {cart.length} farms!</h4>
                        <button className="checkout-btn green" onClick={() => {
                            this.onCheckOut()
                        }}>Checkout</button>
                        <h3 className="">WE ACCEPT:</h3>
                        <div className="payment-method flex space-around">
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
        totalPrice: state.user.totalPrice

    }
}
const mapDispatchToProps = {
    getTotalPrice,
    loadCart,
    remove,
    clearCount,
    saveOrder
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
