import mongoose from "mongoose";


const questionSchema = mongoose.Schema({
    content:{
        type:String,
        required : [true,"Content feild is required"]
    },
    level:String,
    submissions:Number
})

export const question = mongoose.model("Questions",questionSchema);