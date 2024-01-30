import { Router } from 'express'
import { Request, Response } from 'express'

export const router = Router()

// Public Route

router.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'Working...' })
})

// User Routes - CRUD

router.get('/users')
router.post('/users')
router.put('/users')
router.delete('/users')
