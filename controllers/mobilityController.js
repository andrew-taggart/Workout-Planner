const { Mobility } = require('../models')

const getAllMobility = async (req, res) => {
    try {
        const mobility = await Mobility.find()
        res.json(mobility)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getMobilityById = async (req, res) => {
    try {
        const { id } = req.params
        const mobility = await Mobility.findById(id)
        if (mobility) {
            return res.json(mobility)
        }
        return res.status(404).send('mobility with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createMobility = async (req, res) => {
    try {
        const mobility = await new Mobility(req.body)
        await mobility.save()
        return res.status(201).json({
            mobility
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateMobility = async (req, res) => {
    try {
        let { id } = req.params;
        let mobility = await Mobility.findByIdAndUpdate(id, req.body, { new: true })
        if (mobility) {
            return res.status(200).json(tv)
        }
        throw new Error("Mobility not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteMobility = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await TV.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("mobility deleted")
        }
        throw new Error("mobility item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllMobility,
    getMobilityById,
    createMobility,
    updateMobility,
    deleteMobility,
}