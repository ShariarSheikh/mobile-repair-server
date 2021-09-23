require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/connectDB");
//data base config
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Shariar");
});

//user authentication
app.use("/auth/user", require("./router/userAuth"));

app.listen(PORT, () => {
  console.log(`Port listening on ${PORT}`);
});
