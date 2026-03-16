import mongoose from "mongoose";
const Schema=mongoose.Schema;

const TaskSchema=new mongoose.Schema({
    Title:{type:String , required:true},
    Description:{type:String , required:true},
    status:{type: String ,enum :["Done","Not Done"] , default :"Not Done" , required:true},
    user : {type:Schema.Types.ObjectId , ref: "User"}
})

export default mongoose.model('Task',TaskSchema);