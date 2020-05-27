import { NavLink } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { CartItemsList } from '../cmps/CartItemsList'
import { loadCart, remove, getTotalPrice, checkout } from '../store/actions/userActions'
import CartService from '../services/cartService'
import storageService from '../services/storageService'
import {Modal} from '../cmps/Modal'
class Cart extends React.Component {

    state = {
        class: ''
    }
    componentDidMount() {
        this.props.loadCart()
        this.props.getTotalPrice()
    }
    componentDidUpdate() {
        this.props.getTotalPrice()
    }
    componentWillUnmount() {
    }
    onOpenModal = () => {
        this.setState({
            class: 'block'
        })
    }

    onSetModal() {
        console.log('changing modal');
        const currentState = this.state.modal;
        this.setState({ modal: !currentState })
    }
    onCloseModal=()=> {
        this.setState({
            class: ''
        })
    }


    render() {
        const { cart, remove, totalPrice } = this.props
        console.log(cart);

        return (
            <section className="cart-container flex space-around">
    
                <section className='items-container flex column'>
                    <h1>CART</h1>
                    {cart.map((cartItem, idx) => {
                        console.log(cartItem);
                        
                        return <ul key={idx}>
                            <li className="shop-title">{cartItem&&cartItem.items[0].shop.name}</li>
                            <CartItemsList items={cartItem.items} remove={remove} />
                        </ul>
                    })}
                </section>
                    <Modal onCloseModal={this.onCloseModal}  showMode={this.state.class}/>
                <section className="payment-container flex column space-between">
                    <h1>TOTAL</h1>
                    <h3>Sub-total: {totalPrice ? `$${totalPrice}` : '0'}</h3>
                    <h3>Delivery:</h3>
                    <select name="" id="">
                        <option value="">Standard - Up to 7 days (Free)</option>
                        <option value="">Express - Up to 3 days ($5)</option>
                        <option value="">Next day - Will arrive tomorrow ($15)</option>
                    </select>
                    <button onClick={() => {
                    this.onOpenModal()
                }}>Checkout</button>
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
