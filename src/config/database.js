const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://iamharikrishnaa:Bhairav143@namastenode.cblpekt.mongodb.net/devTinder"
    );
    console.log('Db connected successfully');
  } catch (err) {
    console.error('Connection failed:', err);
  }
};

module.exports = connectDB


