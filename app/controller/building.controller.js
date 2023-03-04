import * as buildingService from '../services/building.service'

export const createBuilding = async (req, res) => {
    const { buildingId } = req.body
    try {
        if (!buildingId) {
            return res.status(400).json({
                msg: 'Missing inputs'
            })
        }
        const building = await buildingService.createBuildingService(buildingId)
        return res.status(200).json(building)
    } catch (error) {
        return res.status(500).json({
            msg: 'Faill at auth controller: ' + error
        })
    }
}
export const getBuilding = async (req, res) => {

    try {
        const building = await buildingService.getBuildingService()
        return res.status(200).json(building)
    } catch (error) {
        return res.status(500).json({
            msg: 'Faill at auth controller: ' + error
        })
    }
}
export const updateBuilding = async (req, res) => {

    try {
        const { buildingId } = req.query
        const { buildingIdUpdate } = req.body
        const building = await buildingService.updateBuildingService(buildingId, buildingIdUpdate)
        return res.status(200).json(building)
    } catch (error) {
        return res.status(500).json({
            msg: 'Faill at auth controller: ' + error
        })
    }
}
export const deleteBuilding = async (req, res) => {
    const { id } = req.query
    try {
        if (!id) {
            return res.status(400).json({
                msg: 'Missing id'
            })
        }
        const building = await buildingService.deleteBuildingService(id)
        return res.status(200).json(building)
    } catch (error) {
        return res.status(500).json({
            msg: 'Faill at auth controller: ' + error
        })
    }
}