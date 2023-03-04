import express from 'express'
import * as buildingController from '../controller/building.controller'
const router = express.Router()

router.post('/create', buildingController.createBuilding)

router.get('/getall', buildingController.getBuilding)

router.put('/update', buildingController.updateBuilding)
router.delete('/delete', buildingController.deleteBuilding)
export default router