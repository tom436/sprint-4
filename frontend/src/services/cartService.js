
import storageService from './storageService'



export default {
    addToCart,
    loadCart,
    remove
}

var gCart = [];
_createCart()


function addToCart(item, amount) {

    var idx=gCart.findIndex(purchase=>{
        return purchase._id===item._id
    })
    if(idx!=-1){
        gCart[idx].totalPrice+=item.price*amount
        gCart[idx].amount+=amount;
        return Promise.resolve(gCart)
    }
    const purchase = { ...item, totalPrice: amount * item.price,amount }
    gCart.push(purchase);
    storageService.store('cart', gCart);
    return Promise.resolve(gCart)
}



function loadCart() {
    return gCart;
}

function _createCart() {
    gCart = storageService.load('Cart')
    storageService.store('Cart', gCart)
}



function remove(itemId) {
    const itemIdx = _getIdxById(itemId)
    gCart.splice(itemId, 1)
    storageService.store('cart', gCart)
    return Promise.resolve();
}
function _getIdxById(itemId) {
    return gCart.findIndex(item => item.id === itemId)
}
