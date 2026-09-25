import mongoose from "mongoose"

export const ConnectDB = (url) => {
    return mongoose.connect(url)
}