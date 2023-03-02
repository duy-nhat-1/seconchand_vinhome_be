import express from 'express'
import * as Category from '../controller/category.controller'

const router = express.Router()

router.get('/categories', Category.getCategories)
// router.get('/abc', (req, res) => {
//     res.send('server on...')
// })
export default router