const fs = require('fs');

const baseUrl = 'http://localhost:3000/shops';
const axios = require('axios').default;


function getById(shopId) {
    return axios.get(`${baseUrl}/${shopId}`)
        .then(res => console.log('should be a store',res)
        )
}





module.exports = {
    getById
}