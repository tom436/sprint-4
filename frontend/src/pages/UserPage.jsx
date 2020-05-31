import React from 'react';
// import {Route, Switch,  NavLink, Link } from "react-router-dom";
import { loadOrders } from '../store/actions/shopActions.js'
import { connect } from 'react-redux';

class ShopManage extends React.Component {

    state = {

    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.loadUser(id)
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
        // items: state.item.items,
        loggedUser: state.user.loggedUser
    }
}

const mapDispatchToProps = {
    loadItems,
    loadOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)