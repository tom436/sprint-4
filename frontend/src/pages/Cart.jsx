import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { CartItemsList } from '../cmps/CartItemsList'
import { loadCart, remove, getTotalPrice, checkout } from '../store/actions/userActions'
import CartService from '../services/cartService'
import storageService from '../services/storageService'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

class Cart extends React.Component {



    state = {
        open: false,
    };

    onOpenModal = () => {
        CartService.newOrder()
        this.setState({ open: true });
    };

    onCloseModal = (ev) => {
        // ev.preventDefault()
        this.setState({ open: false });
        
    };


    componentDidMount() {
        this.props.loadCart()
        this.props.getTotalPrice()
    }
    componentDidUpdate() {
        this.props.getTotalPrice()
    }
    componentWillUnmount() {
    }




    render() {
        const { cart, remove, totalPrice } = this.props
        console.log(cart);

        return (
            <section className="cart-container flex space-around">
                <div>
                    <Modal open={this.state.open} center>
                        <h2>thank you for your purchase</h2>

                        <Link onClick={this.onCloseModal} to={`/`}>
                            Continue shopping <i className="fas fa-angle-double-right"></i>
                        </Link>
                    </Modal>
                </div>

                <section className='items-container flex column'>
                    <h1>CART</h1>
                    {cart.map((cartItem, idx) => {
                        return <ul key={idx}>
                            <li className="shop-title">{cartItem.shopId}</li>
                            <CartItemsList items={cartItem.items} remove={remove} />
                        </ul>
                    })}
                </section>

                <section className="payment-container flex column space-between">
                    <h1>TOTAL</h1>
                    <h3>Sub-total: {totalPrice ? `$${totalPrice}` : '0'}</h3>
                    <h3>Delivery:</h3>
                    <select name="" id="">
                        <option value="">Standard - Up to 7 days (Free)</option>
                        <option value="">Express - Up to 3 days ($5)</option>
                        <option value="">Next day - Will arrive tomorrow ($15)</option>
                    </select>
                    <button onClick={this.onOpenModal}>Checkout</button>
                    <div>
                        <h3>WE ACCEPT:</h3>
                    </div>
                </section>

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
    remove
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
