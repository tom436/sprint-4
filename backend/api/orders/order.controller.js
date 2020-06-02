const orderService = require('./order.service.js')

async function getOrders(req, res) {
    console.log('fsd');
    
    try {
        const orders = await orderService.query(req.query)
        res.send(orders)
    } catch (err) {
        res.status(500).send({ error: 'cannot get orders' })

    }
}
async function updateOrder(req, res) {
    const order = req.body;
    await orderService.update(order)
    res.send(order)
}
async function addOrder(req, res) {
    var order = req.body;
    order = await orderService.add(order)
    res.send(order)
}

module.exports = {
    getOrders,
    addOrder,
    updateOrder
}