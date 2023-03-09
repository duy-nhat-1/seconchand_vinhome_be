import { getRedis } from "../config/redisConfig";
import * as UserService from "../services/user.service"

export const getCurrent = async (req, res) => {
    const { id } = req.user
    try {
        console.time();
        const userRidis = await getRedis(`user-${id}`)
        const user = JSON.parse(userRidis)
        // const response = await UserService.getUserService(id)
        console.timeEnd();
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at user controller: ' + error
        })
    }
}