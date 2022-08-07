import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        requied: true,
        unique: true,
    },
    email:{
        type:String,
        requied: true,
        unique: true,
    },
    password:{
        type:String,
        requied: true,
    },
    img:{
        type:String,
    },
    subcribers:{
        type:Number,
        default:0
    },
    subcribersUsers:{
        type:[String]
    }
},{timestamps:true});

export default mongoose.model("User", UserSchema)