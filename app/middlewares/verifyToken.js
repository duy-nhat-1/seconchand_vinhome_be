import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {

    let accessToken = req.headers.authorization?.split(' ')[1]
    if (!accessToken) return res.status(401).json({
        err: 1,
        msg: 'Missing access token'
    })

    jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(401).json({
            err: 1,
            msg: 'Access token expired'
        })

        req.user = user
        next()
    })


}
export const isAdmin = ((req, res, next) => {
    const { role } = req.user
    if (role !== 'admin')
        return res.status(401).json({
            success: false,
            mes: ' REQUIRE ADMIN ROLE'
        })
    next()
})
