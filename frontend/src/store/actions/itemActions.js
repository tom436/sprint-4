
import itemService from '../../services/itemService.js';

export function loadItems(filterBy, sortBy=null) {  
  
  return dispatch => {
    return itemService.query(filterBy,sortBy)
      .then(items => {
        dispatch({ type: 'SET_ITEMS', items })
        return items
      })
  }
}
export function loadItem(id,isOne) {
  
  return dispatch => {
   return itemService.query(id,null,isOne)
      .then(item => {
        dispatch({ type: 'SET_ITEM', item:item[0] })
<<<<<<< HEAD
        console.log(item[0]);
=======
>>>>>>> 3e16374e10b51fe6d4f32df58a0634a8cc337e0d
        
        return item[0]
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
