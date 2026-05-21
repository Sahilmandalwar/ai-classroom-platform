import mongoose from 'mongoose';
const {
    MONGO_URI
} = process.env;
const connectDB = async() => {
    try{
        await mongoose.connect(MONGO_URI);
        console.log("mongoDB connected");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;