import mongoose, { Schema, Document } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface IAdmin extends Document {
    _id: string
    name: {
        first_name: string
        last_name: string
    }
    phone_number: number
    password: string
    photo: string
    type: string
    created_at: number
}

const adminSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        }
    },
    phone_number: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        enum: ['admin', 'super_admin'],
        default: 'admin'
    },
    created_at: {
        type: Number,
        default: Date.now
    }
})

export default mongoose.model<IAdmin>('Admin', adminSchema)
