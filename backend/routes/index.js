const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/creditcards', controllers.getAllCards) //Creating a route on server to connect the request with the controller
router.get('/banks', controllers.getAllBanks) //Creating a route on server to connect the request with the controller 
router.post('/banks', controllers.createBank)
router.post('/creditcards', controllers.createCard)
router.get('banks/:id', controllers.getBankById)
router.get('creditcards/:id', controllers.getCardById)

module.exports = router;