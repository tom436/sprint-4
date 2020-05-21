
// import utilService from './utilService.js'
// import storageService from './storageService.js'
const baseUrl = 'http://localhost:3000/items';
const axios = require('axios').default;
const STORAGE_KEY = 'items'
var gItems = []

export default {
    query,
    save,
    remove,
    getById
}


function save(itemToSave) {
    if (itemToSave.id) {
        // UPDATE
        return axios.put(`${baseUrl}/${itemToSave.id}`, itemToSave)
        .then(res => res.data)
        .then(savedItem => {
            const itemIdx = _getIdxById(savedItem.id)
            gItems[itemIdx] = savedItem;
            return savedItem
        })
    } else {
        // CREATE
        return axios.post(baseUrl, itemToSave)
            .then(res => res.data)
            .then(savedItem => {
                gItems.unshift(savedItem)
                return savedItem
            })

    }

}

function query(filterBy) {
    if (!filterBy) filterBy = {};
    
    return axios.get(baseUrl, {params: {q: filterBy.vendor}})
        .then(res => res.data)
        .then(items => {
            gItems = items;
            // This is very useful for DEBUGING from the console!
            window.theItems = items;
            return items;
        })
}
function remove(itemId) {
    return axios.delete(`${baseUrl}/${itemId}`)
        .then(() => {
            const itemIdx = _getIdxById(itemId)
            gItems.splice(itemIdx, 1)
        })

}
function getById(itemId) {
    return axios.get(`${baseUrl}/${itemId}`)
        .then(res => res.data)
}
function _getIdxById(itemId) {
    return gItems.findIndex(item => item.id === itemId)
}

