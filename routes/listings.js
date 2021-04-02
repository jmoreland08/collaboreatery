const { Router } = require('express')
const controllers = require('../controllers/listings')
const router = Router()

router.get('/listings', controllers.getListings)
router.get('/listings', controllers.getListings)
router.get('/listings', controllers.getListings)
router.get('/listings', controllers.getListings)

module.exports = router