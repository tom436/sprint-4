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

function query(filterBy, sortBy = null) {
    if (!filterBy) filterBy = {};

    return axios.get(`${baseUrl}`)
        .then(res => res.data)
        .then(items => {

            if (filterBy.searchValue) items = _filterItems(items, filterBy);
            console.log('b4 compare',items);
           
           if(sortBy) items=compare(items, sortBy)
           console.log('after comp',items);
           
            window.theItems = items;
            return items;
        })
}

function _filterItems(items, filterBy) {
    console.log(filterBy);
    console.log('in filter', items);

    return items.filter(item => {
        return item.title.includes(filterBy.searchValue) ||
            item.tags.includes(filterBy.searchValue) ||
            item.shop._id.includes(filterBy.searchValue)
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
        .catch(err => console.log(err))
}

function _getIdxById(itemId) {
    return gItems.findIndex(item => item.id === itemId)
}

function compare(items, sortBy) {
    console.log('items in compare', items);
    console.log('sort by ', sortBy);

    switch (sortBy) {
        case 'highToLow':
            return items.sort((a, b) => {
                console.log('im high');
                if (a.price > b.price) return -1
                if (a.price < b.price) return 1
                else return 0
            })
            case 'lowToHigh':
                return items.sort((a, b) => {
                    console.log('im low');
                    
                    if (a.price < b.price) return -1
                    if (a.price > b.price) return 1
                    else return 0
                })
            }


        }

