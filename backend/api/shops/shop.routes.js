const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {addShop, getShops, deleteShop,getShop,updateShop} = require('./shop.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)
router.get('/:id', getShop)
router.get('/', getShops)
router.post('/',addShop)
router.put('/',updateShop)
router.delete('/:id', deleteShop)
module.exports = router