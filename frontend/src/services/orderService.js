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

function save(order,toDo) {
    console.log(toDo);
    
    if (toDo) {
        console.log('update');
        
        return HttpService.put(`orders`, order)
            .then(order => {
                return order
            })
    }
    else {
        // CREATE
        console.log('add');
        order._id=_makeId()
        return HttpService.post(`orders/`, order)
            .then(order => {
                return order
            })
    }
}
function _makeId(length = 6) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
