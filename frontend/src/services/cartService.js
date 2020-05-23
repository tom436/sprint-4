
import storageService from './storageService'



export default {
    addToCart,
    loadCart,
    remove
}

var gCart = [];
_createCart()


function addToCart(item, amount) {
    
    const shopIdx = gCart.findIndex(purchase => {
        return purchase.shop === item.shop.title
    })
    if (shopIdx != -1) {
        const idx = gCart[shopIdx].items.findIndex(purchase => {
            return purchase._id === item._id
        })
        if (idx != -1) {
            gCart[shopIdx].items[idx].totalPrice += item.price * amount
            gCart[shopIdx].items[idx].amount += amount;
            storageService.store('cart', gCart);
            return Promise.resolve(gCart)
        }
        const purchase = { ...item, totalPrice: amount * item.price, amount }
        gCart[shopIdx].items.push(purchase);
        storageService.store('cart', gCart);
        return Promise.resolve(gCart)

    }
    const purchase = { shop: item.shop.title, items: [{ ...item, totalPrice: amount * item.price, amount }] }
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
