
import storageService from './storageService'



export default {
    addToCart,
    loadCart,
    remove
}

var gCart = [];
_createCart()


function addToCart(item, amount) {
    console.log('im here');
    
    var idx=gCart.findIndex(purchase=>{
        return purchase._id===item._id
    })
    console.log(idx);

    if(idx!=-1){
        gCart[idx].totalPrice+=item.price*amount
        gCart[idx].amount+=amount;
        storageService.store('cart', gCart);
        return Promise.resolve(gCart)
    }
    const purchase = {shop:item.shop.title,items:[{ ...item, totalPrice: amount * item.price,amount}] }
    gCart.push(purchase);
    storageService.store('cart', gCart);
    return Promise.resolve(gCart)
}



function loadCart() {
    return Promise.resolve(gCart)
}

function _createCart() {
    gCart = storageService.load('cart')
    storageService.store('cart', gCart)
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
