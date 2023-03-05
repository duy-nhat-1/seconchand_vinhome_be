// import db from "../models"
// export const getCategoriesService = () => new Promise(async (resolve, reject) => {
//     try {
//         const response = await db.Categories.findAll({
//             raw: true,
//             nest: true,
//             // include: [
//             //     // { model: db.Img, as: 'img', attributes: ['imgId'] },
//             //     // { model: db.Product, as: 'product', attributes: ['name', 'price', 'status'] },
//             //     // { model: db.Category, as: 'category', attributes: ['name', 'atribute',] },
//             // ],
//             attributes: ['id', 'name', 'atribute']
//         })
//         resolve({
//             err: response ? 0 : 1,
//             msg: response ? 'OK' : 'Getting category faill.',
//             response
//         })
//     } catch (error) {
//         reject(error)
//     }
// })
// category
// export const createCategoryService = (id) => new Promise(async (resolve, reject) => {
//     try {
//         const category = await db.Categories.create({
//             id,
//         })
//         resolve({
//             msg: category ? 'Create create building successfully !' : 'Create building error',

//         })
//     } catch (error) {
//         reject(error)
//     }
// })

// export const updateCategoryService = (categoryId,) => new Promise(async (resolve, reject) => {
//     try {
//         const building = await db.Building.update({ name: "", atribute: "" }, {
//             raw: true,
//             nest: true,
//             where: {
//                 categoryId,
//             }
//         })
//         resolve({
//             msg: building == 1 ? 'Update success' : 'Not found id'
//         })
//     } catch (error) {
//         reject(error)
//     }
// })
// export const deleteCategoryService = (buildingId) => new Promise(async (resolve, reject) => {
//     try {

//         const building = await db.Building.destroy({
//             raw: true,
//             nest: true,
//             where: {
//                 id: buildingId
//             }
//         })
//         resolve({
//             msg: building ? "Delete succes" : "Delete fail"
//         })
//     } catch (error) {
//         reject(error)
//     }
// })