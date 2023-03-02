import * as postService from '../services/post.service'


export const getPostsLimit = async (req, res) => {
    const { page } = req.query
    try {
        const response = await postService.getPostsLimitService(page)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const createPost = async (req, res) => {
    const { title, description, userId, name, price, categoryId } = req.body
    try {
        if (!title || !description || !userId || !name || !price || !categoryId) {
            return res.status(400).json({
                msg: 'Missing inputs'
            })
        }
        const post = await postService.createService(req.body)
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({
            msg: 'Faill at auth controller: ' + error
        })
    }
}