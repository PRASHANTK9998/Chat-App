const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


// const User = mongoose.model("User", new mongoose.Schema({
//     name: {type: "String", require:true},
//     username: { type: "String", unique: true, required: true},
//     password: {type: "String", required:true},
//     dob: {type: Date},
//     profile: {
//         type: "String",
//         default:
//           "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
//     },
//     gender:{
//         type:"String",
//         enum:["male", "female"]
//     },
//     status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
//     friendlist: [String]
//     },
//     { timestamps: true }
//     ));

//   module.exports={User};


const userSchema = mongoose.Schema(
    {
    name: {type: "String", require:true},
    username: { type: "String", unique: true, required: true},
    password: {type: "String", required:true},
    dob: {type: Date},
    profile: {
        type: "String",
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    gender:{
        type:"String",
        enum:["male", "female"]
    },
    status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
    friendlist: [{type: mongoose.Schema.Types.ObjectId, ref:"User"}]
    },
    { timestamps: true }
    );

 const User = mongoose.model("User",userSchema);

  module.exports=User;