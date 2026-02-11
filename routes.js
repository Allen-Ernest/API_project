import { Router } from "express"
import handler from "./data_handler.js"
const router = Router()

router.get('/', (_, res) => {
    res.send('Welcome to the allen API')
})

router.use('/api', handler)

export default router
