
console.log('Hello Node, Hi Mongo');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    query
}

async function query(filterBy = {}) {
    console.log(filterBy);

    const criteria = {};
    if (filterBy.title) {
        let regex = new RegExp(filterBy.title,'i');
        criteria.title = regex
    }
    if (filterBy.shopId) {
        criteria['shop._id'] = filterBy.shopId
    }
     if (filterBy.shopName) {
        criteria['shop.name'] = filterBy.shopName
    }
    if (filterBy.tag) {
        let regex = new RegExp(filterBy.tag,'i');
        criteria.tags = regex
    }

    console.log(criteria);


    const collection = await dbService.getCollection('items')
    try {
        const customers = await collection.find(criteria).toArray();
        return customers
    } catch (err) {
        console.log('ERROR: cannot find items')
        throw err;
    }
}

async function remove(itemsId) {
    const collection = await dbService.getCollection('items')
    try {
        await collection.deleteOne({ "_id": ObjectId(itemId) })
    } catch (err) {
        console.log(`ERROR: cannot remove item ${itemId}`)
        throw err;
    }
}