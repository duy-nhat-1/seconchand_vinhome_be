import db from '../models'
import { v4 } from 'uuid'
import { raw } from 'mysql2'
require('dotenv').config()
import jwt from 'jsonwebtoken'


export const registerService = ({ fullName, email, phone, avatar }) => new Promise(async (resolve, reject) => {
    try {
        const existUser = await db.User.findOne({
            where: {
                email
            },
        });
        const user = await db.User.create({
            id: v4(),
            fullName,
            email,
            phone,
            avatar,

        })
        resolve({
            msg: existUser ? 'Register is successfully !' : 'Email is aldready exist',
        })
    } catch (error) {
        reject(error)
    }
})
export const loginService = async (email) => {
    try {

        const user = await db.Users.findOne({
            where: {
                email: email
            },
            raw: true
        });
        const acesstoken = jwt.sign({ id: user.id, fullName: user.fullName, email: user.email }, process.env.SECRET, {
            expiresIn: 86400,
        })
        const refreshToken = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 864000,
        })
        await db.Users.update({ refreshToken: refreshToken }, {
            where: {
                id: user.id
            },
            returning: true,
            plain: true
        })
        return { acesstoken, refreshToken }
    } catch (error) {
        throw new Error(error)
    }
}

export const refreshToken = async (req, res) => {
    const { refreshToken: requestToken } = req.body;

    if (requestToken == null) {
        return res.status(403).json({ message: "Refresh Token is required!" });
    }

    try {
        let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });

        console.log(refreshToken)

        if (!refreshToken) {
            res.status(403).json({ message: "Refresh token is not in database!" });
            return;
        }

        if (RefreshToken.verifyExpiration(refreshToken)) {
            RefreshToken.destroy({ where: { id: refreshToken.id } });

            res.status(403).json({
                message: "Refresh token was expired. Please make a new signin request",
            });
            return;
        }

        const user = await refreshToken.getUser();
        let newAccessToken = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: config.jwtExpiration,
        });

        return res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: refreshToken.token,
        });
    } catch (err) {
        return res.status(500).send({ message: err });
    }
};