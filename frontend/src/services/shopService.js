import axios from 'axios'
import shopItems from '../services/itemService'

const baseUrl = 'http://localhost:3000/shops';


export default {
    getById,
    addReview,
    save
}


function getById(shopId) {
    return axios.get(`${baseUrl}/${shopId}`)
        .then(res => res.data)
        .then(shop => shop)
}


function addReview(shop, review) {
    shop.reviews.unshift(review)
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