
import cartService from '../../services/cartService.js';

export function addToCart(item,amount) {  
  return dispatch => {
    cartService.addToCart(item,amount)
      .then(cart => dispatch({ type: 'SET_CART', cart }))
  }
}

export function loadCart() {  
    return dispatch => {
        cartService.loadCart()
        .then(cart => dispatch({ type: 'SET_CART', cart }))
    }
  }






