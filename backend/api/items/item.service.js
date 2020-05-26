
console.log('Hello Node, Hi Mongo');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    query,
    getById
}

async function query(filterBy = {}) {

    console.log(filterBy);
    let criteria
    if (filterBy.searchValue) {
         criteria = { $or: [] };
        let regex = new RegExp(filterBy.searchValue, 'i');
        criteria.$or.push({ title: regex })
        criteria.$or.push({ tags: regex })
        criteria.$or.push({ shopId: filterBy.searchValue })
        // criteria.$or.push({ ['shop.name']: regex })
    }
    else { criteria = {}}
    console.log(criteria);

    const collection = await dbService.getCollection('items')
    try {
        const items = await collection.find(criteria).toArray();
        return items
    } catch (err) {
        console.log('ERROR: cannot find items')
        throw err;
    }
}

async function getById(itemId) {

    const collection = await dbService.getCollection('items')
    try {
        const item = await collection.findOne({ "_id": itemId })
        return item
    } catch (err) {
        console.log(`ERROR: while finding item ${itemId}`)
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