const { Router } = require('express')
const controllers = require('../controllers/listings')
const router = Router()
const restrict = require("../helpers/restrict");

router.get('/', controllers.getListings)
router.get('/:id', controllers.getListing)
router.post('/', restrict, controllers.createListing)
router.put('/:id', restrict, controllers.updateListing)
router.delete('/:id', restrict, controllers.deleteListing)

module.exports = router