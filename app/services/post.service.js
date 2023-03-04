import db from '../models'
const { Op } = require("sequelize")
import { v4 } from 'uuid'
import { response } from 'express'
export const getPostsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAll({

            raw: true,
            nest: true,
            include: [
                // { model: db.Img, as: 'img', attributes: ['imgId'] },
                { model: db.Product, as: 'product', attributes: ['name', 'price', 'status'] },
                // { model: db.Category, as: 'category', attributes: ['name', 'atribute',] },
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
            raw: true,
            nest: true,
            offset: page * (+process.env.LIMIT) || 0,
            limit: +process.env.LIMIT,
            include: [
                // { model: db.Imgs, as: 'img', attributes: ['imgId'] },
                { model: db.Product, as: 'product', attributes: ['name', 'price', 'status'] },
                // { model: db.Category, as: 'category', attributes: ['name', 'atribute',] },
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
export const createPostService = ({ title, description, userId, name, price, categoryId }) => new Promise(async (resolve, reject) => {
    try {
        const post = await db.Post.create({
            id: v4(),
            title,
            description,
            like: false,
            userId,
        })
        // console.log(post);
        const product = await db.Product.create({
            id: v4(),
            name,
            price,
            status: true,
            categoryId,
            postId: post.id

        })
        resolve({
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
        resolve({
            err: responsePost ? 0 : 1,
            msg: responseProduct ? 'Delete success Product' : 'Delete fail !!!',
            msg: responsePost ? 'Delete success POST' : 'Delete fail !!!',
        })
    } catch (error) {
        reject(error)
    }
})