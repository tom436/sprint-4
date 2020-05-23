import { NavLink } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';

import cartService from '../services/cartService'
import {addToCart,loadCart} from '../store/actions/userActions'

class Cart extends React.Component {

    state = {
        cart:['no items']
    }
    componentDidMount() {
        this.props.loadCart()
        
    }
    componentWillUnmount() {
    }


    render() {

        return (
              <section className="cart-container flex space-around">
                  <section className='items-container flex column'>
                      <h1>CART</h1>
                      <button onClick={()=>{
                          this.props.addToCart({_id:'v102',title:'cat',price:20,shop:{title:'Moshes farm',_id:'s200'}},1)
                      }      
                      }>try me</button>
                      <button onClick={()=>{
                          console.log(this.props.cart);
                      }}>load items</button>

                  </section>
                      
                  <section className="payment-container flex column space-between">
                      <h1>TOTAL</h1>
                      <button>Checkout</button>
                  </section>
              </section>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        cart:state.user.cart
    }
}
const mapDispatchToProps = {
    addToCart,
    loadCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
