
const shopService = require('./shop.service.js')


// const logger = require('../../services/logger.service')

// TODO: needs error handling! try, catch

async function getShops(req, res) {
    
    try {
        const shops = await shopService.query(req.query)
        res.send(shops)
    } catch (err) {
        // logger.error('Cannot get shops', err);
        res.status(500).send({ error: 'cannot get shops' })

    }
}
async function getShop(req, res) {
    
    const shop = await shopService.getById(req.params.id)
    
    res.send(shop)
}
  
async function deleteShop(req, res) {
    try {
        await shopService.remove(req.params.id)
        res.end()
    } catch (err) {
        // logger.error('Cannot delete shop', err);
        res.status(500).send({ error: 'cannot delete shop' })
    }
}
async function updateShop(req, res) {
    const shop = req.body;
    await shopService.update(shop)
    res.send(shop)
}
async function addShop(req, res) {
    var shop = req.body;
    shop = await shopService.add(shop)
    res.send(shop)
}

module.exports = {
    getShops,
    deleteShop,
    addShop,
    getShop,
    updateShop
}