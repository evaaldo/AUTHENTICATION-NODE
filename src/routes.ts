import { Router } from 'express'
import { Request, Response } from 'express'
import { UserController } from './controllers/UserController'
import { AuthenticationController } from './controllers/AuthenticationController'
import { verifyAuth } from './middleware/verifyAuth'

export const router = Router()

const userController = new UserController()
const authenticationController = new AuthenticationController()

// Public Route

router.get('/', (request: Request, response: Response) => { return response.status(200).json({ message: 'Working...' }) })

// Private Route

router.get('/auth/:id', verifyAuth, authenticationController.getAuthenticadedUser)

// Authentication Routes

router.post('/auth', authenticationController.authenticateUser)

// User Routes - CRUD

router.get('/users', userController.getAllUsers)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)
