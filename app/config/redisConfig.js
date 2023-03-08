import Redis from 'ioredis'
import { promisify } from 'util'
const redisClient = new Redis();

const getRedis = (value) => {
    const syncRedisGet = promisify(redisClient.get).bind(redisClient);
    return syncRedisGet(value)
}

const setRedis = (key, value) => {
    const syncRedisSet = promisify(redisClient.set).bind(redisClient);
    return syncRedisSet(key, value);
}
export { redisClient, getRedis, setRedis };