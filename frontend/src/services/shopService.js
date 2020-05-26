import HttpService from './HttpService';




export default {
    getById,
    addReview,
    save
}


function getById(shopId) {
    console.log(`?_id=${shopId}`);

    return HttpService.get(`shops?_id=${shopId}`)
        .then(res => res)
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