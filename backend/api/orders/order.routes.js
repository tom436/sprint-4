const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {addOrder, getOrders} = require('./order.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)
router.get('/:id', getOrders)
router.post('/',addOrder)
module.exports = router