import authRouter from './auth.routes'
import postRouter from './post.routes'
import categoryRouter from './category.routes'
import buildingRouter from './building.routes'
import userRouter from './user.routes'
const initRoutes = (app) => {
    app.use('/api/auth', authRouter)

    app.use('/api/post', postRouter)
    // return app.use('/', (req, res) => {
    //     res.send('server on...')
    // app.use('/api/category', categoryRouter)
    // })
    app.use('/api/building', buildingRouter)
    app.use('/api/user', userRouter)
    app.use('/api/category', categoryRouter)
}

export default initRoutes