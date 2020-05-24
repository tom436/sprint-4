
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
export function remove(item){
  return dispatch=>{
    cartService.remove(item)
    .then(itemToRemove=>dispatch({ type: 'REMOVE_ITEM', itemToRemove }))
  }
}
export function getTotalPrice(items){
  return dispatch=>{
    cartService.getTotal(items)
    .then(totalPrice=>dispatch({ type: 'SET_PRICE', totalPrice }))
  }
}

export function checkOut(items){
  return dispatch=>{
    cartService.getTotal(items)
    .then(totalPrice=>dispatch({ type: 'SET_PRICE', totalPrice }))
  }
}





