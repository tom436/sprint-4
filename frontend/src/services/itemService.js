import HttpService from './HttpService';

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

function query(filterBy = null, sortBy = null,isSingle) {
    
    if (!filterBy) filterBy = '';
    if(isSingle){   
             
        return HttpService.get(`items?itemId=${filterBy}`)
        .then(items => {
            if (sortBy) items = compare(items, sortBy)
            return items;
        })
    }
    return HttpService.get(`items?searchValue=${filterBy}`)
        .then(items => {            
            if (sortBy) items = compare(items, sortBy)
            return items;
        })
}



function remove(itemId) {
    
    return HttpService.delete(`items/${itemId}`)

}

function getById(itemId) {
    
    return HttpService.get(`items/${itemId}`)
        .then(res => {
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

