import mongoose from "mongoose";

const connectToDatabase = async () => {
    try{
        await mongoose.connect( process.env.MONGO_DB_URL );
        console.log("connected to Database");
    }catch(error){
        console.log("Error in connecting to MongoDB" , error.message );
    }
}

export default connectToDatabase;