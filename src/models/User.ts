import mongoose, { Schema } from 'mongoose'

interface IUser extends Document {
    userId: String,
    username: String,
    password: String
}

const userSchema = new Schema<IUser>({
    userId: String,
    username: String,
    password: String
})

const User = mongoose.model<IUser>('User', userSchema)

export default User