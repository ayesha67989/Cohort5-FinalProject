const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use;
const BookingModel = require("./bookingModel");
const UserModel = require("./model");

  app.post("/createUser", async (req, res) => {
    try {
      const user = new BookingModel(req.body);
       await user.save();
      if (user) {
        res.json({ message: "User already exists", roomPrint: user });
      } 
    } catch (error) {
      console.log("API Failed: " + error);
      res.json({ message: "An error occurred", error: error });
    }
  });
  



app.post("/signup", async (req, res) => {
  const userDetail = UserModel(req.body);
  try {
    const userExists = await UserModel.findOne({
      // UserModel
      email: req.body.email, //email is runtime variable while req.body.email is requesting email data from the model body
    });
    if (userExists) {
      res.json("User Already Exists");
      res.sendStatus(400);
    } else {
      userDetail.save();
      res.json("User Created");
    }
  } catch {
    console.log("API Failed");
  } 
});
app.post("/login", async (req, res) => {
  try {
    const userExists = await UserModel.findOne({
      email: req.body.email, 
      password: req.body.password,
    });
    if (userExists) {
      res.json({ message: "login successful", userPrint: userExists}); 
    } else {
      res.json({ message: "login unsuccessful" });
    }
  } catch {
    console.log("API Failed");
  }
});
app.get("/get/:id", (req, res) => {
  const id = req.params.id;
  bookingModel.findById(id)
    .then(user => {
      if (!user) {
        res.status(404).send("User not found");
      } else {
        res.status(200).send(user);
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
});
app.put("/get/:id", (req, res) => {
  const id = req.params.id;
  BookingModel.findById(id)
    .then((user) => {
      user.username = req.body.username;
      user.email = req.body.email;
      user.telephone = req.body.telephone;
      user.roomName = req.body.roomName;
      user.roomQty = req.body.roomQty;
      user.checkIn = req.body.checkIn;
      user.checkOut = req.body.checkOut;

      return user.save();
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(200).send(err.message);
    });
});

// app.get("/showrooms", async (req, res) => {
//   try {
//     const rooms = await RoomModel.find({});
//     res.json(rooms);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  BookingModel.findByIdAndRemove(id)
    .then(user => {
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});


const mongoose = require("mongoose");
const bookingModel = require("./bookingModel");
mongoose.connect("mongodb://127.0.0.1:27017/project", {
  useNewUrlParser: true,
});

mongoose.connection.once("open", () => {
  console.log("database successful");
});

app.listen(port, () => {
  //add listener (server) at the end of the files, so that db and whole code can execute

  console.log(`server is running on ${port}`);
});
