import orderService from '../../services/orderService.js';

export function loadOrders(filterBy) {  
  return dispatch => {
    return orderService.query(filterBy)
      .then(orders => {
        dispatch({ type: 'SET_ORDERS', orders })
        return orders
      })
  }
}

export function saveOrder(order) {
  return dispatch => {
    'ADD_ORDER'
    orderService.save(order)
      .then(savedOrder => dispatch({ type: 'ADD_ORDER', order: savedOrder }))
  }
}
