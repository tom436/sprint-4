
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

function query() {
    // if (!filterBy) filterBy = {};
    const filterBy={
        searchValue:'',
    }
    return axios.get(`${baseUrl}`)
        .then(res => res.data)
        .then(items => {
            window.theItems = items;
            // console.log(items);

            if(filterBy.searchValue) items=_filterItems(items,filterBy);
            // console.log(items);
            
            return items;
        })
}

function _filterItems(items,filterBy){
    return items.filter(item=>{
        return item.title.includes(filterBy.searchValue)||
        item.tags.includes(filterBy.searchValue)||
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
}
function _getIdxById(itemId) {
    return gItems.findIndex(item => item.id === itemId)
}

