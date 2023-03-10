import express from 'express'
import * as Category from '../controller/category.controller'

const router = express.Router()

router.get('/', Category.getCategories)
// router.get('/abc', (req, res) => {
//     res.send('server on...')
// })
router.post('/create', Category.createCategories)
router.put('/update/:id', Category.updateCategories)
router.delete('/delete/:id', Category.deleteCategories)
export default router