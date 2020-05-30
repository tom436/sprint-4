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



function query(filterBy = null, sortBy = null) {
    console.log('pppp');
    
    if (!filterBy) filterBy = {};

    return HttpService.get(`shops`)
        .then(shops => {
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

    return HttpService.get(`shops/${shopId}`)
        .then(res => {

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
        return HttpService.put(`shops/`, shop)
            .then(savedItem => {
                return savedItem
            })
    } else {
        // CREATE
        return HttpService.post(`shops/`, shop)
            .then(savedItem => {
                return savedItem
            })
    }
}