const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    add,
    update
}

async function query(filterBy = {}) {
    const criteria = {};
    console.log(filterBy);
    
    if (filterBy.shopId) {
        criteria.shopId = filterBy.shopId
    }
    const collection = await dbService.getCollection('orders')
    try {
        const orders = await collection.find(criteria).toArray();
        return orders
    } catch (err) {
        console.log('ERROR: cannot find orderss')
        throw err;
    }
}

async function add(order) {
    const collection = await dbService.getCollection('orders')
    try {
        await collection.insertOne(order);
        return order;
    } catch (err) {
        console.log(`ERROR: cannot insert order`)
        throw err;
    }
}
async function update(order) {
    const collection = await dbService.getCollection('orders')
    try {
        await collection.replaceOne({"_id":order._id}, {$set : order})
        return order
    } catch (err) {
        console.log(`ERROR: cannot update order ${order._id}`)
        throw err;
    }
}