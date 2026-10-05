import mongoose from "mongoose"

export const ConnectDB = async (url) => {
    try {
        const connection = await mongoose.connect(url)

        console.log(`MongoDB connected: ${connection.connection.host}`)
    } catch (error) {
        console.error("MongoDB connection failed:")
        console.error(error)
        throw error
    }
}