const { Router } = require('express')
const controllers = require('../controllers/users')

const router = Router()

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verify)
router.put('/users/:id/addFavorite/:listingId', controllers.addFavorite)
router.get('/users/:id', controllers.getUser)

module.exports = router