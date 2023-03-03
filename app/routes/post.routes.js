import express from 'express'
import * as postController from '../controller/post.controller'

const router = express.Router()

router.get('/limit', postController.getPostsLimit)
// router.get('/abc', (req, res) => {
//     res.send('server on...')
router.post('/createpost', postController.createPost)
// })
router.delete('/deletepost', postController.deletePost)
export default router