import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    userId:{
        type:String,
        requied: true,
    },
    videoId:{
        type:String,
        requied: true,
    },
    desc:{
        type:String,
        requied: true,
    },
},{timestamps:true});

export default mongoose.model("Comment",CommentSchema);