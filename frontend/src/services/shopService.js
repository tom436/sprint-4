import axios from 'axios'
import shopItems from '../services/itemService'

const baseUrl = 'http://localhost:3000/shops';


export default {
    getById
}





function getById(shopId) {
    return axios.get(`${baseUrl}/${shopId}`)
        .then(res => res.data)
        .then(shop => shop)
}