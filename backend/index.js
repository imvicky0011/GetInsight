import express from 'express'
import dotenv from 'dotenv'

import connectionDB  from './database/connectionDB.js'
import cookieParser from 'cookie-parser'

import TodoRoutes from './routes/todos.js'
import UserRoutes from './routes/users.js'
import ProfileRoutes from './routes/profile.js'

const app = express()

dotenv.config()

connectionDB()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(cookieParser())

app.use('/todos', TodoRoutes);
app.use('/users', UserRoutes);
app.use('/profile', ProfileRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening to the PORT ${process.env.PORT}`)
})


