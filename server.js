import express from 'express'
require('dotenv').config
import cors from 'cors'
const app = express()
import initRoutes from './app/routes'
import cookieParser from 'cookie-parser'
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"]
}))
app.use(express.json())
app.use(cookieParser())
import connectDB from './app/config/connectDB'
app.use(express.urlencoded({ extended: true }))
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
const port = process.env.PORT || 8987
app.get("/", (req, res) => {
    res.json({ message: "Wellcome to app" });
});
const listener = app.listen(port, () => {
    console.log(`Server is runing on port ${listener.address().port}`);
})
initRoutes(app)
connectDB()