
console.log('Hello Node, Hi Mongo');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    query,
    getById
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

async function getById(shopId) {
    console.log('here',shopId);
    
    const collection = await dbService.getCollection('shops')
    try {
        const shop = await collection.findOne({"_id":shopId})
        console.log('in',shop);
        
        return shop
    } catch (err) {
        console.log(`ERROR: while finding shop ${shopId}`)
        throw err;
    }
}


async function add(shop) {
    const collection = await dbService.getCollection('shop')
    try {
        await collection.insertOne(shop);
        return shop;
    } catch (err) {
        console.log(`ERROR: cannot insert shop`)
        throw err;
    }
}

async function update(shop) {
    const collection = await dbService.getCollection('shop')
    shop._id = ObjectId(shop._id);

    try {
        await collection.replaceOne({"_id":shop._id}, {$set : shop})
        return shop
    } catch (err) {
        console.log(`ERROR: cannot update shop ${shop._id}`)
        throw err;
    }
}
