import User from '../models/User'

export class UserService {

    async getAllUsers() {

        const users = await User.find()

        return users

    }

    async createUser(username: string, password: string) {

        const userId = crypto.randomUUID()

        const user = new User({ userId, username, password })

        try{

            await user.save()

        } catch(error) {

            throw error

        }

    }

    async updateUser(userId: string, username:string, password: string) {

        const user = await User.updateOne({ userId: userId }, { username: username, password: password })

    }

    async deleteUser(userId: string) {

        const user = await User.deleteOne({ userId: userId })

    }

}