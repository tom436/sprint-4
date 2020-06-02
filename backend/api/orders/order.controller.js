const orderService = require('./order.service.js')

async function getOrders(req, res) {
    try {
        const orders = await orderService.query(req.query)
        res.send(orders)
    } catch (err) {
        res.status(500).send({ error: 'cannot get orders' })

    }
}

async function addOrder(req, res) {
    var order = req.body;
    order = await orderService.add(order)
    res.send(order)
}

module.exports = {
    getOrders,
    addOrder
}