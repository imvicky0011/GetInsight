import express from 'express'
import authorize from '../middleware/auth.js'
import { getMyTodos } from '../controllers/profileController.js'

const router = express.Router()

router.get("/myTodo", authorize, getMyTodos)

export default router;