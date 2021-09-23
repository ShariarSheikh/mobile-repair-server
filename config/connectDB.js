const mongoose = require("mongoose");

exports.connectDB = async () => {
  await mongoose.connect(process.env.DB_HOST, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log("DB CONNECTED");
};
