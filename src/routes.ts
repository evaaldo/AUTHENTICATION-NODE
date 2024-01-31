import { Router } from 'express'
import { Request, Response } from 'express'
import { UserController } from './controllers/UserController'

export const router = Router()

const userController = new UserController()

// Public Route

router.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'Working...' })
})

// User Routes - CRUD

router.get('/users', userController.getAllUsers)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)
