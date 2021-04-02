const { Router } = require('express')
const controllers = require('../controllers/listings')
const router = Router()

router.get('/listings', controllers.getListings)
router.get('/listings/:id', controllers.getListing)
router.post('/listings', controllers.createListing)
router.put('/listings/:id', controllers.updateListing)
router.delete('/listings/:id', controllers.deleteListing)

module.exports = router