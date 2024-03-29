import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

const userService = new UserService()

export class UserController {

    async getAllUsers(request: Request, response: Response) {

        const users = await userService.getAllUsers()

        return response.status(200).json(users)

    }

    async createUser(request: Request, response: Response) {

        const user = request.body

        if(!user.username || !user.password) { return response.status(422).json({ message: "Invalid informations!" }) }

        await userService.createUser(user.username, user.password)

        return response.status(200).json({ message: "User created!" })

    }

    async updateUser(request: Request, response: Response) {

        const user = request.body
        const userId = request.params.id

        if(!user.username || !user.password || !userId) { return response.status(422).json({ message: "Invalid informations!" }) }

        await userService.updateUser(userId, user.username, user.password)

        return response.status(200).json({ message: "User updated!" })

    }

    async deleteUser(request: Request, response: Response) {

        const userId = request.params.id

        if(!userId) { return response.status(422).json({ message: "Invalid information!" }) }

        await userService.deleteUser(userId)

        return response.status(200).json({ message: "User deleted!" })

    }

}