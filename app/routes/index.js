import authRouter from './auth.routes'
import postRouter from './post.routes'
import categoryRouter from './category.routes'
const initRoutes = (app) => {
    app.use('/api/auth', authRouter)

    app.use('/api/post', postRouter)
    // return app.use('/', (req, res) => {
    //     res.send('server on...')
    app.use('/api/category', categoryRouter)
    // })
}

export default initRoutes