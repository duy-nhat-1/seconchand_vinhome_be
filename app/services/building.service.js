import db from "../models"
export const createBuildingService = (id) => new Promise(async (resolve, reject) => {
    try {
        const building = await db.Building.create({
            id,
        })
        resolve({
            msg: building ? 'Create create building successfully !' : 'Create building error',

        })
    } catch (error) {
        reject(error)
    }
})
export const getBuildingService = () => new Promise(async (resolve, reject) => {
    try {
        const building = await db.Building.findAll({
            raw: true,
            nest: true,
        })
        resolve({
            msg: building ? 'Get all building' : 'Get all building faill',
            building

        })
    } catch (error) {
        reject(error)
    }
})
export const updateBuildingService = (buildingId, buildingIdUpdate) => new Promise(async (resolve, reject) => {
    try {
        const isxistBuildingId = await db.Building.findOne({
            raw: true,
            nest: true,
            where: {
                id: buildingIdUpdate
            }
        })
        const building = await db.Building.update({ id: `${buildingIdUpdate}` }, {
            raw: true,
            nest: true,
            where: {
                id: buildingId
            }
        })
        resolve({
            msg: building == 1 || isxistBuildingId ? 'Update success' : 'Not found id'
        })
    } catch (error) {
        reject(error)
    }
})
export const deleteBuildingService = (buildingId) => new Promise(async (resolve, reject) => {
    try {

        const building = await db.Building.destroy({
            raw: true,
            nest: true,
            where: {
                id: buildingId
            }
        })
        resolve({
            msg: building ? "Delete succes" : "Delete fail"
        })
    } catch (error) {
        reject(error)
    }
})