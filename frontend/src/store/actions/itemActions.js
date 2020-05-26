
import itemService from '../../services/itemService.js';

export function loadItems(filterBy, sortBy=null) {  
  
  return dispatch => {
    return itemService.query(filterBy,sortBy)
      .then(items => {
        dispatch({ type: 'SET_ITEMS', items })
        console.log(items);
        
        return items
      })
  }
}
export function loadItem(id) {
  return dispatch => {
   return itemService.getById(id)
      .then(item => {
        dispatch({ type: 'SET_ITEM', item })
        return item
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

export function setFilter(filter) {
  return dispatch => {
 dispatch({ type:'SET_FILTER', filter })

  }
}
