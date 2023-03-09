import jwt from 'jsonwebtoken'
require('dotenv').config
export const verifyToken = (req, res, next) => {

    const accessToken = req.headers.authorization?.split(' ')[1]
    console.log(accessToken);
    if (!accessToken) return res.status(401).json({
        err: 1,
        msg: 'Missing access token'
    })
    jwt.verify(accessToken, process.env.SECRET, (err, user) => {
        if (err) return res.status(401).json({
            err: 1,
            msg: 'Access token expired'
        })

        req.user = user
        next()
    })


}
export const isAdmin = ((req, res, next) => {
    const { roleId } = req.user
    console.log(roleId);
    if (roleId !== 'admin')
        return res.status(401).json({
            success: false,
            mes: ' REQUIRE ADMIN ROLE'
        })
    next()
})
