const { Strength } = require('../models')

const getAllStrength = async (req, res) => {
    try {
        const strength = await Strength.find()
        res.json(strength)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getStrengthById = async (req, res) => {
    try {
        const { id } = req.params
        const strength = await Strength.findById(id)
        if (strength) {
            return res.json(strength)
        }
        return res.status(404).send('strength with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createStrength = async (req, res) => {
    try {
        const strength = await new Strength(req.body)
        await strength.save()
        return res.status(201).json({
            strength
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateStrength = async (req, res) => {
    try {
        let { id } = req.params;
        let strength = await Strength.findByIdAndUpdate(id, req.body, { new: true })
        if (strength) {
            return res.status(200).json(tv)
        }
        throw new Error("Strength not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteStrength = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await TV.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("strength deleted")
        }
        throw new Error("strength item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllStrength,
    getStrengthById,
    createStrength,
    updateStrength,
    deleteStrength,
}