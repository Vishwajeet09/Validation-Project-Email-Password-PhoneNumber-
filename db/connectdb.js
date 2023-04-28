import mongoose from "mongoose";

const connectDB = async(DATABASE_URI) =>{
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(DATABASE_URI);
        console.log("Mongoose Connected Successfully..");
    }
    catch(err){
        console.log(err);
    }
};

export default connectDB;
