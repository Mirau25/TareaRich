import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect ("mongodb+srv://root:1025887051@cluster0.hrotehx.mongodb.net/");
        console.log(">> DB Connect");
    } catch (error){
        console.log(error);
    }
}