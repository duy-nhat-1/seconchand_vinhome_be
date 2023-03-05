// import * as categoryService from '../services/category.service'
// export const getCategories = async (req, res) => {
//     try {
//         const response = await categoryService.getCategoriesService()
//         return res.status(200).json(response)

//     } catch (error) {
//         return res.status(500).json({
//             err: -1,
//             msg: 'Failed at post controller: ' + error
//         })
//     }
// }
// export const createCategories = async (req, res) => {
//     try {
//         const response = await categoryService.createCategoryService()
//         return res.status(200).json(response)

//     } catch (error) {
//         return res.status(500).json({
//             err: -1,
//             msg: 'Failed at post controller: ' + error
//         })
//     }
// }
// export const updateCategories = async (req, res) => {
//     const { id } = req.query
//     const { name, atribute } = req.body
//     try {
//         const response = await categoryService.updateCategoryService(id, name, atribute)
//         return res.status(200).json(response)

//     } catch (error) {
//         return res.status(500).json({
//             err: -1,
//             msg: 'Failed at post controller: ' + error
//         })
//     }
// }
// export const deleteCategories = async (req, res) => {
//     try {
//         const { id } = req.query
//         const response = await categoryService.deleteCategoryService(id)
//         return res.status(200).json(response)

//     } catch (error) {
//         return res.status(500).json({
//             err: -1,
//             msg: 'Failed at post controller: ' + error
//         })
//     }
// }