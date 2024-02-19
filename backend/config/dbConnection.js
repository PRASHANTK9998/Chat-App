const mongoose = require("mongoose");

const connectDB = async () => {
  try {
<<<<<<< HEAD
    const conn = await mongoose.connect('mongodb+srv://CDACProject:projectCDAC@chat-app.ejmv9fv.mongodb.net/?retryWrites=true&w=majority', {
=======
    const conn = await mongoose.connect(process.env.MONGO_URI, {
>>>>>>> d916ef559bcda19fe1acf79677e6955d5fe870d3
      
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;