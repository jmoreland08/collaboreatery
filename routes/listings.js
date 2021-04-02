const { Router } = require('express')
const controllers = require('../controllers/listings')
const router = Router()
const restrict = require("../helpers/restrict");

router.get('/listings', controllers.getListings)
router.get('/listings/:id', controllers.getListing)
router.post('/listings', restrict, controllers.createListing)
router.put('/listings/:id', restrict, controllers.updateListing)
router.delete('/listings/:id', restrict, controllers.deleteListing)

module.exports = router