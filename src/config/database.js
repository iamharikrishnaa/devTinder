const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://iamharikrishnaa:Bhairav143@devtinder.oibgwpj.mongodb.net/?retryWrites=true&w=majority&appName=DevTinder"
    );
    console.log('Db connected successfully');
  } catch (err) {
    console.error('Connection failed:', err);
  }
};

module.exports = connectDB


