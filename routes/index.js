
const { Router } = require('express')
const listingsRouter = require('./listings');
const usersRouter = require('./users');

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRouter);
router.use('/listings', productsRouter);

module.exports = router