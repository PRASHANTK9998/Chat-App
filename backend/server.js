const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 5000;

// Use the cors middleware
app.use(cors());


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/user_auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// User model
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  password: String,
  dob: Date,
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  friendlist: [String]
}));

app.use(bodyParser.json());

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { name, username, password, dob } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const status = 'inactive';
    const friendlist = 'null';
    const user = new User({ name, username, password: hashedPassword, dob, status, friendlist});
    await user.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Login route
app.post('/login', async (req, res) => {
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
    const token = jwt.sign({ userId: user._id }, 'secret');
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
