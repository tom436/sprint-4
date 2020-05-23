
import itemService from '../../services/itemService.js';

export function loadItems(filterBy, sortBy=null) {  
  return dispatch => {
    itemService.query(filterBy,sortBy)
      .then(items => dispatch({ type: 'SET_ITEMS', items }))
  }
}
export function addToCart(){
  console.log('added to cart');

  return dispatch => {
    itemService.query()
      .then(items => dispatch({ type: 'SET_ITEMS', items }))
  }
  
}
export function addToFavorites(){
  console.log('added to favorites');
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
<<<<<<< HEAD







=======
>>>>>>> c00825a3541ba39f67e4a381077efa1827667dd3
