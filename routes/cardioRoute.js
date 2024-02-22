const express = require('express')
const router = express.Router()
const cardioController = require('../controllers/cardioController')

router.get('/', (req, res) => res.send('Landing Page. Setup html'))
//Get Cardios
router.get('/cardios', cardioController.getAllCardio)
router.get('/cardios/:id', cardioController.getCardioById)
//Create Cardio
router.post('/cardios', cardioController.createCardio)
//Update Cardio
router.put('/cardios/:id', cardioController.updateCardio)
//delete Cardio
router.delete('/cardios/:id', cardioController.deleteCardio)

module.exports = router