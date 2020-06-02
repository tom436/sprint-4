const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {addOrder, getOrders,updateOrder} = require('./order.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)
router.get('/', getOrders)
router.post('/',addOrder)
router.put('/',updateOrder)

module.exports = router