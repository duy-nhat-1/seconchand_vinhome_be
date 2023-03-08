import express from 'express'
import * as userController from '../controller/user.controller'
import * as verifyTokenmiddlewares from '../middlewares/verifyToken'
const router = express.Router()

router.get('/current', verifyTokenmiddlewares.verifyToken, userController.getCurrent)

export default router
