import db from "../models"
const getCurrentt = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const user = await db.User.findById(_id).select('-refreshToken -password -role')
    return res.status(200).json({
        success: user ? true : false,
        rs: user ? user : 'User not found'
    })
})
const getCurrent = async (req, res) => {
    const { id } = req.user

}