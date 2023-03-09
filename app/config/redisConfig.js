import Redis from 'ioredis'
import { promisify } from 'util'
require('dotenv').config()
const redisClient = new Redis(process.env.REDIS_URL);
redisClient.on('connect', () => {
    console.log('Redis client connected with URL');
})
const getRedis = (value) => {
    const syncRedisGet = promisify(redisClient.get).bind(redisClient);
    return syncRedisGet(value)
}

const setRedis = (key, value) => {
    const syncRedisSet = promisify(redisClient.set).bind(redisClient);
    return syncRedisSet(key, value);
}
export { redisClient, getRedis, setRedis };