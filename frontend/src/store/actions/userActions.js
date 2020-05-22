
import cartService from '../../services/cartService.js';

export function addToCart(item,amount) {  
  return dispatch => {
    cartService.addToCart(item,amount)
      .then(purchase => dispatch({ type: 'ADD_PURCHASE', purchase }))
  }
}








