import * as buildingService from '../services/building.service'

export const createProduct = async (req, res) => {
    const { name, price, categoryId, postId } = req.body
    try {
        if (!name || !price || !categoryId || !postId) {
            return res.status(400).json({
                msg: 'Missing inputs'
            })
        }
        const product = await buildingService.createBuildingService(req.body)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({
            msg: 'Faill at auth controller: ' + error
        })
    }
}
export const getProduct = async (req, res) => {

    try {
        const product = await productService.getProductService()
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({
            msg: 'Faill at auth controller: ' + error
        })
    }
}
export const updateProduct = async (req, res) => {

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
export const deleteProduct = async (req, res) => {
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