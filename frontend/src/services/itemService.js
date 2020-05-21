const baseUrl = 'http://localhost:3000/items';
const axios = require('axios').default;
export default {
    query
}

function query() {
    return axios.get(baseUrl)
        .then(res => res.data)
}
