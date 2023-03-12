import db from '../models'
const { Op } = require("sequelize")
import { v4 } from 'uuid'
import { setRedis } from '../config/redisConfig'
export const getPostbyIdService = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findOne({

           
            nest: true,
            where: {
                id,
            },
            include: [
                { model: db.Img, as: 'img', attributes: ['url'] },
                {
                    model: db.Product, as: 'product', attributes: ['productName', 'price', 'status'], include: [
                        { model: db.Category, as: 'category', attributes: ['categoryName', 'attribute',] }
                    ]
                },

            ],
            attributes: ['id', 'title', 'like', 'description']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting post is failed.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const getPostsLimitService = (page) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAndCountAll({
    
            nest: true,
            offset: page * (+process.env.LIMIT) || 0,
            limit: +process.env.LIMIT,
            include: [
                { model: db.Img, as: 'img', attributes: ['url'] },
                {
                    model: db.Product, as: 'product', attributes: ['productName', 'price', 'status'], include: [
                        { model: db.Category, as: 'category', attributes: ['categoryName', 'attribute',] }
                    ]
                },

            ],
            attributes: ['id', 'title', 'like', 'description']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting posts is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})
export const createPostService = ({ title, description, userId, productName, price, categoryId, imgIds }) => new Promise(async (resolve, reject) => {
    try {
        const post = await db.Post.create({
            id: v4(),
            title,
            description,
            like: false,
            userId,
        })
        const product = await db.Product.create({
            id: v4(),
            productName,
            price,
            status: true,
            categoryId,
            postId: post.id

        })

        const img = await db.Img.bulkCreate(
            imgIds.map(img => (
                { id: v4(), url: img.url, postId: post.id }
            )));
        resolve({
            msg: img ? 'Create success' : 'Create faill',
            msg: post ? 'Create post successfully !' : 'Create post error',
            msg: product ? 'Create success' : 'Create post not success'
        })
    } catch (error) {
        reject(error)
    }
})
export const deletePostsService = (id) => new Promise(async (resolve, reject) => {
    try {
        const responseProduct = await db.Product.destroy({
            raw: true,
            nest: true,
            where: {
                postId: id
            }
        })
        const responsePost = await db.Post.destroy({
            raw: true,
            nest: true,
            where: {
                id
            },
        })
        const responseImg = await db.Img.destroy({
            raw: true,
            nest: true,
            where: {
                postId: id
            },
        })
        resolve({
            err: responsePost ? 0 : 1,
            msg: responseProduct ? 'Delete success Product' : 'Delete fail !!!',
            msg: responsePost ? 'Delete success POST' : 'Delete fail !!!',
        })
    } catch (error) {
        reject(error)
    }
})
export const getAllPostService = () => new Promise(async (resolve, reject) => {
    try {
        const post = await db.Post.findAll({
            // raw: true,
            nest: true,
            include: [
                { model: db.Img, as: 'img', attributes: ['url',] },
                {
                    model: db.Product, as: 'product', attributes: ['productName', 'price', 'status'], include: [
                        { model: db.Category, as: 'category', attributes: ['categoryName', 'attribute',] }
                    ]
                },

            ],
            attributes: ['id', 'title', 'like', 'description', 'userId']

        })
        const redis = await setRedis(`post-${post.id}`, JSON.stringify(post))
        resolve({
            msg: post ? 'Get all post' : 'Get all post',
            post
        })
    } catch (error) {
        reject(error)
    }
})