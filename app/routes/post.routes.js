import express from 'express'
import * as postController from '../controller/post.controller'
import * as verifyTokenmiddlewares from '../middlewares/verifyToken'
const router = express.Router()

router.get('/limit', postController.getPostsLimit)
router.get('/getall', postController.getAllPost)
router.get('/:id', postController.getPostbyId)
// router.get('/abc', (req, res) => {
//     res.send('server on...')
router.post('/createpost', postController.createPost)
// })
router.delete('/deletepost/:id', postController.deletePost)
export default router