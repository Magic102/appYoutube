import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId:{
        type:String,
        requied: true,
    },
    title:{
        type:String,
        requied: true,
    },
    desc:{
        type:String,
        requied: true,
    },
    imgUrl:{
        type:String,
        requied: true,
    },
    videoUrl:{
        type:String,
        requied: true,
    },
    views:{
        type:Number,
        default: 0,
    },
    tags:{
        type:[String],
        default:[],
    },
    likes:{
        type:[String],
        default:[],
    },
    dislikes:{
        type:[String],
        default:[],
    },
},{timestamps:true});

export default mongoose.model("Video", VideoSchema)