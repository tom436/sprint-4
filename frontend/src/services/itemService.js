import HttpService from './HttpService';

const baseUrl = 'http://localhost:3000/items';
const axios = require('axios').default;
const STORAGE_KEY = 'items'
var gItems = []

export default {
    query,
    save,
    remove,
    getById,
    queryCategories,
    queryDemoData
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

function query(filterBy = null, sortBy = null) {
    console.log(filterBy);
    
    if (!filterBy) filterBy = '';
    console.log(filterBy);
    
    return HttpService.get(`items?searchValue=${filterBy}`)
        .then(items => {
            // if (sortBy) items = compare(items, sortBy)
            return items;
        })

    // return HttpService.get(`items`)
    //     .then(items => {
    //         // console.log(items);
    //         // if (filterBy.searchValue) items = _filterItems(items, filterBy);
    //         // if (sortBy) items = compare(items, sortBy)
    //         // window.theItems = items;
    //         return items;
    //     })
}

function _filterItems(items, filterBy) {

    return items.filter(item => {
        return item.title.includes(filterBy.searchValue) ||
            item.tags.includes(filterBy.searchValue) ||
            item.shopId.includes(filterBy.searchValue)
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
    console.log(itemId);
    
    return HttpService.get(`items/${itemId}`)
        .then(res => {
            console.log(res);
            return res
            
        })
        .catch(err => console.log(err))
}

function _getIdxById(itemId) {
    return gItems.findIndex(item => item.id === itemId)
}

function compare(items, sortBy) {

    switch (sortBy) {
        case 'highToLow':
            return items.sort((a, b) => {
                if (a.price > b.price) return -1
                if (a.price < b.price) return 1
                else return 0
            })
        case 'lowToHigh':
            return items.sort((a, b) => {
                if (a.price < b.price) return -1
                if (a.price > b.price) return 1
                else return 0
            })
        case 'A-Z':
            return items.sort((a, b) => {
                if (a.name > b.name) return -1
                if (a.name < b.name) return 1
                else return 0
            })
        case 'Z-A':
            return items.sort((a, b) => {
                if (a.name < b.name) return -1
                if (a.name > b.name) return 1
                else return 0
            })
    }


}

function queryCategories() {

    return axios.get(`http://localhost:3000/categories`)
        .then(res => res.data)
        .then(items => {
            return items;
        })
}

function queryDemoData() {

    return axios.get(`http://localhost:3000/demoData`)
        .then(res => res.data)
        .then(items => {
            return items;
        })
}