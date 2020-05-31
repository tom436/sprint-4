import shopService from '../../services/shopService.js';

export function loadShop(id) {
  return dispatch => {
    return shopService.getById(id)
      .then(shop => {
        dispatch({ type: 'SET_SHOP', shop })
        console.log(shop);
        
        return shop
      })
  }
}

export function loadShops(filterBy, sortBy=null) {  
  return dispatch => {
    return shopService.query(filterBy,sortBy)
      .then(shops => {
        dispatch({ type: 'SET_SHOPS', shops })
        return shops
      })
  }
}

// export function removeShop(shopId) {
//   return dispatch => {
//     shopService.remove(shopId)
//       .then(() => dispatch({ type: 'REMOVE_SHOP', shopId }))
//   }
// }

export function saveShop(shop) {
  return dispatch => {
    const type = shop._id ? 'UPDATE_SHOP' : 'ADD_SHOP';
    shopService.save(shop)
      .then(savedShop => dispatch({ type, shop: savedShop }))
  }
}

// export function setFilter(filter) {
//   return dispatch => {
//  dispatch({ type:'SET_FILTER', filter })
//   }
// }
