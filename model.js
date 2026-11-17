// step 1 require mongoose
const mongoose = require("mongoose")

//step 2, configure your model
const schema = mongoose.Schema({
    name:{type:String,required:true},

    score:{type:Number,required:true,max:100},

    remark:{type:String}
})

const studentModel = mongoose.model("studentScore.",schema)
module.exports = studentModel