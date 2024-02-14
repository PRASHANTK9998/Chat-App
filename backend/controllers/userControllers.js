const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerUser = asyncHandler(async (req,res) =>{
    try {
        const { name, username, password, dob,profile, gender} = req.body;
        console.log(name, username);
        if(!name || !username || !password){
            res.status(400);
            throw new Error("Please fill all the fields");
        }

        const existingUser = await User.findOne({username});
        if (existingUser) {
            res.status(400);
            throw new Error("User already exists");
          }

        const hashedPassword = await bcrypt.hash(password, 10);
        const friendlist = null;
        const user = new User({ name, username, password: hashedPassword, dob, profile, gender, friendlist});
        await user.save();
        res.status(201).send('User created successfully');
      } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
      }
});

const authUser =asyncHandler(async(req,res)=>{
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
          return res.status(400).send('Invalid username or password');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(400).send('Invalid username or password');
        }
        user.status = 'active';
        await user.save();
        const token = jwt.sign({ userId: user._id }, 'secret');
        res.json({
            _id: user._id,
            name: user.name,
            profile: user.profile,
            gender: user.gender,
            status:user.status,
            token:token });
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
});

const countActiveUser =  asyncHandler(async(req, res) => {
  try{
    const user =await User.find({status : 'active'});
    const randomIndex = Math.floor(Math.random() * user.length);
    res.json(user[randomIndex]);
  }
  catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
 

});

module.exports = {registerUser,authUser, countActiveUser};