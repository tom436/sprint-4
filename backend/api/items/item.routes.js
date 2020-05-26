const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {addItem, getItems, deleteItem,getItem} = require('./item.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)
router.get('/:id', getItem)
router.get('/', getItems)
router.post('/',  addItem)
router.delete('/:id', deleteItem)
module.exports = router