import express from 'express'
import * as postController from '../controller/post.controller'
import * as verifyTokenmiddlewares from '../middlewares/verifyToken'
const router = express.Router()

router.get('/limit', postController.getPostsLimit)
router.get('/', postController.getAllPost)
router.get('/:id', postController.getPostbyId)
// router.get('/abc', (req, res) => {
//     res.send('server on...')
router.post('/create', postController.createPost)
// })
router.delete('/delete/:id', postController.deletePost)
export default router