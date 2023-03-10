import { v4 } from "uuid"
import db from "../models"
export const getCategoriesService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.findAll({
            raw: true,
            nest: true,

            attributes: ['id', 'categoryName', 'attribute']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting category faill.',
            response
        })
    } catch (error) {
        reject(error)
    }
})
export const createCategoryService = (categoryName, attribute) => new Promise(async (resolve, reject) => {
    try {
        const category = await db.Category.create({
            id: v4(),
            categoryName,
            attribute
        })
        resolve({
            msg: category ? 'Create create building successfully !' : 'Create building error',

        })
    } catch (error) {
        reject(error)
    }
})

export const updateCategoryService = (id, categoryName, attribute) => new Promise(async (resolve, reject) => {
    console.log(categoryName);
    console.log(attribute);
    try {
        const category = await db.Category.update({ categoryName: categoryName, attribute: attribute }, {
            raw: true,
            nest: true,
            where: {
                id: id,
            }
        })
        console.log(category);
        resolve({
            msg: category ? 'Update success' : 'Not found id'
        })
    } catch (error) {
        reject(error)
    }
})

export const deleteCategoryService = (categoryId) => new Promise(async (resolve, reject) => {
    try {

        const category = await db.Category.destroy({
            raw: true,
            nest: true,
            where: {
                id: categoryId
            }
        })
        resolve({
            msg: category ? "Delete succes" : "Delete fail"
        })
    } catch (error) {
        reject(error)
    }
})