import User from '../models/User'
import { sign } from 'jsonwebtoken'
import 'dotenv/config'

export class AuthenticationService {

    async authenticateUser(username: string, password: string) {

        const user = await User.findOne({ username: username })

        if(user?.password === password) {

            const tokenData = {
                userId: user?.userId,
                username: user?.username,
                password: user?.password
            }

            const tokenKey = 'livinhalinda'

            const token = sign(tokenData, tokenKey)

            return token

        } else {
            return null
        }

    }

    async getAuthenticadedUser(userId: string) {

        const user = await User.findOne({ userId: userId })

        return user

    }

}