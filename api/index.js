import express from 'express'
import '../src/db/mongoose.js'
import userRouter from '../api/routers/user.js'
import taskRouter from '../api/routers/task.js'

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

export default app