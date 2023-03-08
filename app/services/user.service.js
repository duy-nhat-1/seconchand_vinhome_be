import db from "../models"

export const getUserService = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Users.findOne({

            raw: true,
            nest: true,
            where: {
                id,
            },
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting post is failed.',
            response
        })
    } catch (error) {
        reject(error)
    }
})