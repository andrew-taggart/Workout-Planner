const { Workout } = require('../models')

const getAllWorkouts = async (req, res) => {
    try {
        const workout = await Workout.find()
        res.json(workout)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getWorkoutById = async (req, res) => {
    try {
        const { id } = req.params
        const workout = await Workout.findById(id)
        if (workout) {
            return res.json(workout)
        }
        return res.status(404).send('workout with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createWorkout = async (req, res) => {
    try {
        const workout = await new Workout(req.body)
        await workout.save()
        return res.status(201).json({
            workout
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateWorkout = async (req, res) => {
    try {
        let { id } = req.params;
        let workout = await Workout.findByIdAndUpdate(id, req.body, { new: true })
        if (workout) {
            return res.status(200).json(tv)
        }
        throw new Error("Workout not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await TV.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("workout deleted")
        }
        throw new Error("workout item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout,
}