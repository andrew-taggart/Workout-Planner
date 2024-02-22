const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', (req, res) => res.send('Landing Page. Setup html'))
//Get Users
router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getUserById)
//Create User
router.post('/users', userController.createUser)
//Update User
router.put('/users/:id', userController.updateUser)
//delete User
router.delete('/users/:id', userController.deleteUser)

module.exports = router