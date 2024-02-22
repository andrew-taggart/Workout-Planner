const express = require('express')
const router = express.Router()
const mobilityController = require('../controllers/mobilityController')

router.get('/', (req, res) => res.send('Landing Page. Setup html'))
//Get mobilitys
router.get('/mobilitys', mobilityController.getAllMobility)
router.get('/mobilitys/:id', mobilityController.getMobilityById)
//Create mobility
router.post('/mobilitys', mobilityController.createMobility)
//Update mobility
router.put('/mobilitys/:id', mobilityController.updateMobility)
//delete mobility
router.delete('/mobilitys/:id', mobilityController.deleteMobility)

module.exports = router