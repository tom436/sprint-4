<<<<<<< HEAD
=======

import itemService from '../../services/itemService.js';

export function loadItems() {  
  return dispatch => {
    itemService.query()
      .then(items => dispatch({ type: 'SET_ITEMS', items }))
  }
}
export function loadItem(id) {
  return dispatch => {
    itemService.get(id)
      .then(item => {
        dispatch({ type: 'SET_ITEM', item });
      })
  }
}
export function removeItem(itemId) {
  return dispatch => {
    itemService.remove(itemId)
      .then(() => dispatch({ type: 'REMOVE_ITEM', itemId }))
  }
}
>>>>>>> 9681183738fdbe7df25dd6ce14a9265a92c772bb

export function saveItem(item) {
  return dispatch => {
    const type = item._id ? 'UPDATE_ITEM' : 'ADD_ITEM';
    itemService.save(item)
      .then(savedItem => dispatch({ type, item: savedItem }))

  }
}




