
import itemService from '../../services/itemService.js';

export function loadItems(filter) {  
  return dispatch => {
    itemService.query(filter)
      .then(items => {
       console.log(items)
        return dispatch({ type: 'SET_ITEMS', items })
      })
        
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

export function saveItem(item) {
  return dispatch => {
    const type = item._id ? 'UPDATE_ITEM' : 'ADD_ITEM';
    itemService.save(item)
      .then(savedItem => dispatch({ type, item: savedItem }))

  }
}




