import express from 'express'
import * as buildingController from '../controller/building.controller'
import * as verifyTokenmiddlewares from '../middlewares/verifyToken'
const router = express.Router()

router.post('/create', verifyTokenmiddlewares.verifyToken, verifyTokenmiddlewares.isAdmin, buildingController.createBuilding)

router.get('/getall', verifyTokenmiddlewares.verifyToken, verifyTokenmiddlewares.isAdmin, buildingController.getBuilding)

router.put('/update', verifyTokenmiddlewares.verifyToken, verifyTokenmiddlewares.isAdmin, buildingController.updateBuilding)
router.delete('/delete', verifyTokenmiddlewares.verifyToken, verifyTokenmiddlewares.isAdmin, buildingController.deleteBuilding)

export default router