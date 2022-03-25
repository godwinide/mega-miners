const {connect} = require("mongoose");

const connectDB = async() => {
    try{
        await connect(process.env.DB_URI || "mongodb://localhost:27017/expertmining");
        console.log("MongoDB connected.")
    }
    catch(err){
        console.log("Mongodb error", err);
    }
}

module.exports = connectDB;