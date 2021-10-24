var mongoose = require("mongoose");
var userSchema = mongoose.Schema({

email:{type:String},
name:{type:String},
lastName:{type:String},
phone:{type:String},
password:{type:String},
verified:{type:Boolean},
},{ versionKey: false });

module.exports = mongoose.model("userstable",userSchema);