
import userService from '../../services/userService';
import { loading, doneLoading } from './systemActions';
import cartService from '../../services/cartService.js';

export function addToCart(item, amount) {
  return dispatch => {
    cartService.addToCart(item, amount)
      .then(cart => dispatch({ type: 'SET_CART', cart }))
  } 
}

export function loadCart() {
  return dispatch => {
    cartService.loadCart()
      .then(cart => dispatch({ type: 'SET_CART', cart }))
  }
}

export function remove(item) {
  return dispatch => {
    cartService.remove(item)
      .then(itemToRemove => dispatch({ type: 'REMOVE_ITEM', itemToRemove }))
  }
}

export function getTotalPrice(items) {
  return dispatch => {
    cartService.getTotal(items)
      .then(totalPrice => dispatch({ type: 'SET_PRICE', totalPrice }))
  }
}

export function checkOut(items) {
  return dispatch => {
    cartService.checkOut(items)
      .then(checkOut => dispatch({ type: 'SET_PRICE', checkOut }))
  }
}

//////////////////
// import history from './../history';

// THUNK
export function loadUsers() {
  return async dispatch => {
    try {
      // example for loading
      dispatch(loading());
      const users = await userService.getUsers();
      dispatch(setUsers(users));
    } catch (err) {
      console.log('UserActions: err in loadUsers', err);
      // example for rerouting - after changing the store
      // history.push('/some/path');
    } finally {
      dispatch(doneLoading());
    }
  };
}
// THUNK
export function removeUser(userId) {
  return async dispatch => {
    try {
      await userService.remove(userId);
      dispatch(_removeUser(userId));
    } catch (err) {
      console.log('UserActions: err in removeUser', err);
    }
  };
}
// THUNK
export function login(userCreds) {
  return async dispatch => {
    const user = await userService.login(userCreds);
    dispatch(setUser(user));
  };
}
 
export function signup(userCreds) {
  return async dispatch => {
    const user = await userService.signup(userCreds);
    dispatch(setUser(user));
  };
}

export function logout() {
  return async dispatch => {
    await userService.logout();
    dispatch(setUser(null));
  };
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    user
  };
}
function setUsers(users) {
  return {
    type: 'SET_USERS',
    users
  };
}

function _removeUser(userId) {
  return {
    type: 'USER_REMOVE',
    userId
  };
}




