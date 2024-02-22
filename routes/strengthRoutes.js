const express = require('express')
const router = express.Router()
const strengthController = require('../controllers/strengthController')

router.get('/', (req, res) => res.send('Landing Page. Setup html'))
//Get strengths
router.get('/strengths', strengthController.getAllStrength)
router.get('/strengths/:id', strengthController.getStrengthById)
//Create strength
router.post('/strengths', strengthController.createStrength)
//Update strength
router.put('/strengths/:id', strengthController.updateStrength)
//delete strength
router.delete('/strengths/:id', strengthController.deleteStrength)

module.exports = router