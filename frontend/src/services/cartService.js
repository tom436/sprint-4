import storageService from './storageService'

export default {
    addToCart,
    loadCart,
    remove,
    getTotal
}

var gCart = [];
_createCart()

function addToCart(item, amount) {
    
    const shopIdx = gCart.findIndex(purchase => {
        return purchase.shop === item.shop.name
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
    const purchase = { shop: item.shop.name, items: [{ ...item, totalPrice: amount * item.price, amount }] }
    gCart.push(purchase);
    storageService.store('cart', gCart);
    return Promise.resolve(gCart)
}

function remove(item) {
    const itemId=item._id
    const shopIdx= gCart.findIndex((purchase)=>purchase.shop===item.shop.name)
    const itemIdx=gCart[shopIdx].items.findIndex((currItem=>currItem._id===itemId))
    gCart[shopIdx].items.splice(itemIdx, 1)
    if(gCart[shopIdx].items.length===0) {
        gCart.splice(shopIdx,1)
    }
    storageService.store('cart', gCart);
    return Promise.resolve({itemId,shopIdx})
}

function loadCart() {
    return Promise.resolve(gCart)
}

function getTotal(){
    var totalPrice=0;
    gCart.forEach(purchase => {
        purchase.items.forEach(item=>{
            totalPrice+=item.totalPrice
        })
    });
    return Promise.resolve(totalPrice)
}

function _createCart() {
    gCart = storageService.load('cart')
    storageService.store('cart', gCart)
}

// function remove(itemId) {
//     const itemIdx = _getIdxById(itemId)
//     gCart.splice(itemId, 1)
//     storageService.store('cart', gCart)
//     return Promise.resolve();
// }

function _getIdxById(itemId) {
    return gCart.findIndex(item => item.id === itemId)
}
