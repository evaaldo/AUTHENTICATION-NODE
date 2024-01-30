import express from 'express'
import { router } from './routes'
import mongoose from 'mongoose'
import 'dotenv/config'

export const app = express()

app.use(express.json())
app.use(router)

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const port = 3000

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.jxftrbo.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    app.listen(port, () => console.log(`Server is running in http://localhost:${port}`))
}).catch((error) => console.log(error))