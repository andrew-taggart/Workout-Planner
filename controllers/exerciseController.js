const { Exercise } = require('../models')

const getAllExercises = async (req, res) => {
    try {
        const exercise = await Exercise.find()
        res.json(exercise)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getExerciseById = async (req, res) => {
    try {
        const { id } = req.params
        const exercise = await Exercise.findById(id)
        if (exercise) {
            return res.json(exercise)
        }
        return res.status(404).send('exercise  the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createExercise = async (req, res) => {
    try {
        const exercise = new Exercise({
            ...req.body, createdBy: req.user._id })
        await exercise.save()
        return res.status(201).json({
            exercise
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateExercise = async (req, res) => {
    try {
        let { id } = req.params;
        let exercise = await Exercise.findByIdAndUpdate(id, req.body, { new: true })
        if (exercise) {
            return res.status(200).json(tv)
        }
        throw new Error("Exercise not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteExercise = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await TV.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("exercise deleted")
        }
        throw new Error("exercise item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllUserExercises = async (req, res) => {
    try {
        const exercise = await Exercise.find( {createdBy: req.user._id})
        res.json(exercise)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllExercises,
    getExerciseById,
    createExercise,
    updateExercise,
    deleteExercise,
    getAllUserExercises,
}