const { Cardio } = require('../models')

const getAllCardio = async (req, res) => {
    try {
        const cardio = await Cardio.find()
        res.json(cardio)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCardioById = async (req, res) => {
    try {
        const { id } = req.params
        const cardio = await Cardio.findById(id)
        if (cardio) {
            return res.json(cardio)
        }
        return res.status(404).send('cardio with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createCardio = async (req, res) => {
    try {
        const cardio = await new Cardio(req.body)
        await cardio.save()
        return res.status(201).json({
            cardio
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateCardio = async (req, res) => {
    try {
        let { id } = req.params;
        let cardio = await Cardio.findByIdAndUpdate(id, req.body, { new: true })
        if (cardio) {
            return res.status(200).json(tv)
        }
        throw new Error("Cardio not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteCardio = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await TV.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Cardio deleted")
        }
        throw new Error("Cardio item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllCardio,
    getCardioById,
    createCardio,
    updateCardio,
    deleteCardio,
}