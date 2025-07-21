const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user")
const app = express();

app.use(express.json());
app.post("/signup",async (req,res)=>{
  // instance of the user
  const user = new User(req.body)
  try {
    await user.save()
    res.send("user added successfully")
  }catch (err) {
    res.status(400).send("Error adding user: " + err.message);
  }
})

connectDB()
  .then(() => {
    console.log("DB connected");
    app.listen(7777, () => {
      console.log("server is listening on port 7777");
    });
  })
  .catch((err) => {
    console.log("DB not connected :" + err.message);
  });


