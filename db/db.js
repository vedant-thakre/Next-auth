import mongoose from "mongoose";
// made a change
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected the database");
    } catch (error) {
        console.log(error)
    }
}