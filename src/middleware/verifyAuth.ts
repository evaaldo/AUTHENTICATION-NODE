import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function verifyAuth(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization

    if(authToken) {

        const token = authToken.split(' ')[1]

        try {

            const { sub } = verify(token, 'livinhalinda')

            console.log(sub)

            return next()

        } catch (error) { response.status(401).json(error) }

    }

}