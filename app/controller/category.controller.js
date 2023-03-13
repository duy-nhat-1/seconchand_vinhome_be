import * as categoryService from '../services/category.service'
export const getCategories = async (req, res) => {
    try {
        const response = await categoryService.getCategoriesService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const createCategories = async (req, res) => {
    try {
        const { categoryName, attribute } = req.body
        console.log(categoryName);
        const response = await categoryService.createCategoryService(categoryName, attribute)

        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const updateCategories = async (req, res) => {
    const { id } = req.query
    console.log(id);
    const { categoryName, attribute } = req.body
    try {
        const response = await categoryService.updateCategoryService(id, categoryName, attribute)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const deleteCategories = async (req, res) => {
    try {
        const { categoryId } = req.query
        const response = await categoryService.deleteCategoryService(categoryId)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}