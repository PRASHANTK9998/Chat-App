const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/dbConnection');
const userRoutes = require("./routes/userRoutes");
const {notFound,errorHandler} = require("./middleware/errorMiddleware");
const { Server } = require('socket.io');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Apply CORS middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Error Handling Middleware
app.use(errorHandler);
// app.use(notFound);

// Routes
app.use("/users", userRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = Server;
