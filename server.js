require("dotenv").config();
const cors = require("cors");
const express = require("express");

const { connectDB } = require("./config/connectDB");
//data base config
connectDB();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Shariar");
});

//user authentication
app.use("/auth/user", require("./router/userAuth"));
//mobile repair devices api
app.use("/api/mobile-repair-devices", require("./router/repairDevice"));

app.listen(PORT, () => {
  console.log(`Port listening on ${PORT}`);
});
