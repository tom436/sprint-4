import { NavLink } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';

import cartService from '../services/cartService'


class Cart extends React.Component {

    state = {
        cart:['no items']
    }
    componentDidMount() {

    }
    componentWillUnmount() {
    }


    render() {

        return (
              <section className="cart-container flex space-around">
                  <section className='items-container'>
                      <h1>CART</h1>
                      <button onClick={()=>{
                          cartService.addToCart({title:'avokao',price:20})
                      }      
                      }>try me</button>
                      <button onClick={()=>{
                          const items=cartService.loadCart()
                          console.log(items);
                          this.setState({cart:items})
                      }}>load items</button>
                  </section>
                  <div>
                      
                      {`${this.state.cart}`}
                  </div>
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
    }
}
const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
