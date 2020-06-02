const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('items')
    try {
        var items = await collection.aggregate([
            {
                $match: criteria
            },
            {
                $lookup:
                {
                    from: 'shops',
                    localField: 'shopId',
                    foreignField: '_id',
                    as: 'shop'
                }
            },
            {
                $unwind: '$shop'
            }
        ]).toArray()
        items = items.map(item => {
            delete item.shopId;
            delete item.shop.about;
            delete item.shop.aboutImg;
            delete item.shop.location;
            delete item.shop.reviews;
            delete item.shop.tags;
            delete item.shop.owner;
            delete item.shop.orders;
            return item;
        })
        return items
    } catch (err) {
        console.log('ERROR: cannot find items')
        throw err;
    }
}

function _buildCriteria(filterBy) {

    let criteria = {}
    if (filterBy.itemId) {
        criteria._id = filterBy.itemId;
    }
    else if (filterBy.searchValue) {
        criteria = { $or: [] };
        let regex = new RegExp(filterBy.searchValue, 'i');
        criteria.$or.push({ title: regex })
        criteria.$or.push({ tags: regex })
        criteria.$or.push({ shopId: filterBy.searchValue })
    }
    else { criteria = {} }
    return criteria;
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

async function remove(itemId) {
    const collection = await dbService.getCollection('items')
    try {
        await collection.deleteOne({ "_id": itemId })
    } catch (err) {
        console.log(`ERROR: cannot remove item ${itemId}`)
        throw err;
    }
}