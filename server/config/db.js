import mongoose from "mongoose";

// Function to connect to the Database
const connectDB = async () => {
    mongoose.connection.on('connected',() => console.log('Database Connected'))
    await mongoose.connect(`${process.env.MONGODB_URI}/job-sphere`)
}

export default connectDB