const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());
app.post("/signup", async (req, res) => {
  // instance of the user
  const user = new User(req.body);
  try {
    await user.save();
    res.send("user added successfully");
  } catch (err) {
    res.status(400).send("Error adding user: " + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.findOne({ emailId: userEmail });
    if (users.length === 0) {
      return res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Error fetching user: " + err.message);
  }
});

app.get("/feed",async (req, res) => {
    try{
      const users = await User.find({})
      res.send(users)
    }catch(err) {
      res.status(400).send("Error fetching feed: " + err.message);
    }
})

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try{
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  }catch(err) {
    res.status(400).send("Error deleting user: " + err.message);
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
