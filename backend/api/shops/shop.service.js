
console.log('Hello Node, Hi Mongo');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    query
}

async function query(filterBy = {}) {
    console.log(filterBy);

    const criteria = {};
    if (filterBy._id) {
        criteria._id = filterBy._id
    }

    if (filterBy.shopName) {
        let re = new RegExp(filterBy.shopName,'i');
         criteria.name = re
    }
    if (filterBy.tag) {
        criteria.tags = filterBy.tag
    }


    const collection = await dbService.getCollection('shops')
    try {
        const customers = await collection.find(criteria).toArray();
        return customers
    } catch (err) {
        console.log('ERROR: cannot find shopss')
        throw err;
    }
}

