import HttpService from './HttpService';

export default {
    query,
    save
}

function query(filterBy = null) {
    if (!filterBy) filterBy = '';
    return HttpService.get(`orders?shopId=${filterBy}`)
        .then(orders => orders)
}

function save(order) {
    // CREATE
    return HttpService.post(`orders/`, order)
        .then(order => order)
}