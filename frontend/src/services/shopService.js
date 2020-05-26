import HttpService from './HttpService';
const baseUrl = 'http://localhost:3030/api/shops';




export default {
    getById
}


function getById(shopId) {
    console.log(`?_id=${shopId}`);
    
    return  HttpService.get(`shops?_id=${shopId}`)
        .then(res => res)
}