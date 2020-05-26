import axios from 'axios'
// import shopItems from '../services/itemService'
import HttpService from './HttpService';
const baseUrl = 'http://localhost:3000/items';

export default {
    getById,
    query,
    addReview,
    save
}

function getById(shopId) {
    return HttpService.get(`shops?_id=${shopId}`)
        .then(res => res)
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

function getById(shopId) {
    console.log(`shops/${shopId}`);

    return HttpService.get(`shops/${shopId}`)
        .then(res => {
            console.log(res)

            return res
        })

}
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

function addReview(shop, review) {
    shop.reviews.push(review)
    // _save(shop)
}

function save(shop) {
    if (shop._id) {
        // UPDATE
        return axios.put(`${baseUrl}/${shop._id}`, shop)
            .then(res => res.data)
            .then(savedItem => {
                return savedItem
            })
    } else {
        // CREATE
        return axios.post(baseUrl, shop)
            .then(res => res.data)
            .then(savedItem => {
                return savedItem
            })
    }
}