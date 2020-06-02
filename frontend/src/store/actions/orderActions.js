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

export function saveOrder(order,toDo) {
  console.log(toDo);
  
  const type = toDo ? 'UPDATE_ORDER' : 'ADD_ORDER';
  return dispatch => {
    orderService.save(order,toDo)
      .then(savedOrder => dispatch({ type, order: savedOrder }))
  }
}
