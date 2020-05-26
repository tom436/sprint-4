
const itemService = require('./item.service.js')


// const logger = require('../../services/logger.service')

// TODO: needs error handling! try, catch

async function getItems(req, res) {
    
    try {
        const items = await itemService.query(req.query)
        res.send(items)
    } catch (err) {
        // logger.error('Cannot get items', err);
        res.status(500).send({ error: 'cannot get items' })

    }
}

async function deleteItem(req, res) {
    try {
        await itemService.remove(req.params.id)
        res.end()
    } catch (err) {
        // logger.error('Cannot delete item', err);
        res.status(500).send({ error: 'cannot delete item' })
    }
}

async function addItem(req, res) {
    var item = req.body;
    item.byUserId = req.session.user._id;
    item = await itemService.add(item)
    item.byUser = req.session.user;
    // TODO - need to find aboutUser
    item.aboutUser = {}
    res.send(item)
}

module.exports = {
    getItems,
    deleteItem,
    addItem
}