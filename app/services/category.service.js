import db from "../models"
export const getCategoriesService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.findAll({
            raw: true,
            nest: true,
            // include: [
            //     // { model: db.Img, as: 'img', attributes: ['imgId'] },
            //     // { model: db.Product, as: 'product', attributes: ['name', 'price', 'status'] },
            //     // { model: db.Category, as: 'category', attributes: ['name', 'atribute',] },
            // ],
            attributes: ['id', 'name', 'atribute']
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