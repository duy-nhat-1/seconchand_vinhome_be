import * as authService from '../services/auth.service'
const admin = require('../config/firebase.config')
export const register = async (req, res) => {
    const { fullName, email, phone, avatar } = req.body
    try {
        if (!fullName || !email || !phone || !avatar) {
            return res.status(400).json({
                msg: 'Missing inputs'
            })
        }
        const user = await authService.registerService(req.body)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({
            msg: 'Faill at auth controller: ' + error
        })
    }
}
export const login = async (req, res) => {
    // console.log(req.body.token);

    try {
        const tokenId = req.body.token.split(" ")[1];
        if (!tokenId) {
            return res.status(400).json({
                err: 1,
                msg: "Invalid token from firebase"
            })
        }
        const decodeValue = await admin.auth().verifyIdToken(tokenId);
        const email = decodeValue.email;
        const fullName = decodeValue.name;
        const avatar = decodeValue.picture;
        const response = await authService.loginService(email, fullName, avatar)
        res.cookie('refreshToken', response.refreshToken, { httpOnly: true, expiresIn: 864000 })
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Faill at auth controller: " + error
        })
    }
}