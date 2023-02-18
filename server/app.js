import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'

const app = express()
dotenv.config()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/user', userRoutes)
mongoose.set('strictQuery', false)


mongoose.connect(process.env.COMPASS_URL)
    .then(
        () => app.listen(process.env.PORT, () => console.log(`listening at port ${process.env.PORT}`))
    )
    .catch(
        (error) => console.log({ message: 'error in connecting to mongoose DB', error })
    )