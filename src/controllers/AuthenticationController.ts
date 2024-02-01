import { Request, Response } from 'express'
import { AuthenticationService } from '../services/AuthenticationService'

const authenticationService = new AuthenticationService

export class AuthenticationController {

    async authenticateUser(request: Request, response: Response) {

        const user = request.body

        const userToken = await authenticationService.authenticateUser(user.username, user.password)

        return response.status(200).json(userToken)

    }

    async getAuthenticadedUser(request: Request, response: Response) {

        const userId = request.params.id

        const user = await authenticationService.getAuthenticadedUser(userId)

        return response.status(200).json({
            userId: user?.userId,
            username: user?.username
        })

    }

}