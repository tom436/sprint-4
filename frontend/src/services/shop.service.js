// const fs = require('fs');

// const baseUrl = 'http://localhost:3000/shops';
// const axios = require('axios').default;


<<<<<<< HEAD
// const shops = _getShops()


// function _getShops() {
//     return axios.get(baseUrl)
//         .then(shops => gShops = shops.data)
// }


// function getById(shopId) {
//     const shop = shops.find(shop => shop.id === shopId)
//     return Promise.resolve(shop);
// }
=======
function getById(shopId) {
    return axios.get(`${baseUrl}/${shopId}`)
        .then(res => console.log('should be a store',res)
        )
}
>>>>>>> 66fcc45668fe2563a7922d7f2943f40403fc0b9b




<<<<<<< HEAD
// module.exports = {
//     getById
// }
=======

module.exports = {
    getById
}
>>>>>>> 66fcc45668fe2563a7922d7f2943f40403fc0b9b
