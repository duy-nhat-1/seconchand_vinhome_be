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
export const getPostbyId = async (req, res) => {
    try {
        const { id } = req.params
        const response = await postService.getPostbyIdService(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const getAllPost = async (req, res) => {
    try {
        const response = await postService.getAllPostService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const createPost = async (req, res) => {
    const { title, description, userId, productName, price, categoryId, imgIds } = req.body
    console.log(req.body);
    try {
        if (!title || !description || !userId || !productName || !price || !categoryId || !imgIds) {
            return res.status(400).json({
                msg: 'Missing inputs'
            })
        }
        const post = await postService.createPostService(req.body)
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({
            msg: 'Faill at auth controller: ' + error
        })
    }
}
export const updatePost = async (req, res) => {
    const { title, description, userId, name, price, categoryId } = req.body
    try {
        if (!title || !description || !userId || !name || !price || !categoryId) {
            return res.status(400).json({
                msg: 'Missing inputs'
            })
        }
        const post = await postService.createPostService(req.body)
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({
            msg: 'Faill at posst controller: ' + error
        })
    }
}
export const deletePost = async (req, res) => {
    const { id } = req.params
    try {
        if (!id) {
            return res.status(400).json({
                msg: 'Missing id'
            })
        }
        const post = await postService.deletePostsService(id)
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({
            msg: 'Faill at auth controller: ' + error
        })
    }
}

