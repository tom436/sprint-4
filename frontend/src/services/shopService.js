import axios from 'axios'
// import shopItems from '../services/itemService'

const baseUrl = 'http://localhost:3000/shops';

export default {
    getById,
    query
}
 
function getById(shopId) {
    return axios.get(`${baseUrl}/${shopId}`)
        .then(res =>res.data )
}

function query(filterBy = null, sortBy = null) {
    if (!filterBy) filterBy = {};

    return axios.get(`${baseUrl}`)
        .then(res => res.data)
        .then(shops => {
            if (filterBy.searchValue) shops = _filter(shops, filterBy)
            if (sortBy) shops = compare(shops, sortBy)
            return shops;
        })
}


function _filter(shops, filterBy) {
    return shops.filter(shop => {
        return shop.name.includes(filterBy.searchValue) ||
            shop._id.includes(filterBy.searchValue) 
    })
}
///////////////////////////////
function compare(shops, sortBy) {
    switch (sortBy) {
        case 'A-Z':
            return shops.sort((shopA, shopB) => {
                if (shopA.name > shopB.name) return -1
                if (shopA.name < shopB.name) return 1
                else return 0
            })
        case 'Z-A':
            return shops.sort((shopA, shopB) => {
                if (shopA.name < shopB.name) return -1
                if (shopA.name > shopB.name) return 1
                else return 0
            })
    }
}