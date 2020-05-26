import HttpService from './HttpService';




export default {
    getById
}


function getById(shopId) {
    console.log(`shops/${shopId}`);
    
    return  HttpService.get(`shops/${shopId}`)
        .then(res => {
            console.log(res)
            
            return res})
}