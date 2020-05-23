import { NavLink } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';

import cartService from '../services/cartService'
import { addToCart, loadCart } from '../store/actions/userActions'

class Cart extends React.Component {


    componentDidMount() {
        this.props.loadCart()
    }
    componentWillUnmount() {
    }


    render() {
        const { cart } = this.props
        return (
            <section className="cart-container flex space-around">
                <section className='items-container flex column'>
                    <h1>CART</h1>
                    {cart[0]&& cart.map(item=>{

                       return <ul>
                            <li className="shop-title">{item.shop}</li>
                            {item.items.map(item=>{
                                return <li className="flex space-between align-center"><img src={item.img}/>{item.title},{item.totalPrice} <button className="far fa-dove">remove</button> <input type="number" className="edit-amount" value={item.amount}/></li>
                            })}
                        </ul>

                    })} 
                </section>

                <section className="payment-container flex column space-between">
                    <h1>TOTAL</h1>
                    <button>Checkout</button>
                </section>
                <div className=" flex column">                      <button onClick={() => {
                    this.props.addToCart({ _id: 'v102',img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', title: 'cat', price: 20, shop: { title: 'Moshes farm', _id: 's200' } }, 1)
                }
                }>try me moshe cat</button>
                    <button onClick={() => {
                        this.props.addToCart({ _id: 'dasd',img:'https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', title: 'avocado', price: 20, shop: { title: 'Moshes farm', _id: 's200' } }, 1)
                    }
                    }>try me moshe dog</button>
                    <button onClick={() => {
                        this.props.addToCart({ _id: 'v102',img:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', title: 'cat', price: 20, shop: { title: 'avis farm', _id: 's200' } }, 1)
                    }
                    }>try me avi</button>
                    <button onClick={() => {
                        console.log(cart);
                    }}>load items</button>
                </div>
            </section>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        cart: state.user.cart
    }
}
const mapDispatchToProps = {
    addToCart,
    loadCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
