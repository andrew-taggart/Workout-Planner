const express = require('express')
const router = express.Router()
const workoutController = require('./controllers/workoutController')

router.post('/', workoutController.createWorkout)
router.put('/:id', workoutController.updateWorkout)
router.delete('/:id', workoutController.deleteWorkout)
router.get('/', workoutController.findWorkoutsByUser)
router.get('/:id', workoutController.getWorkoutbyId)

module.exports = workoutRouter