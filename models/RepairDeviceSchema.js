const mongoose = require("mongoose");

const RepairDeviceSchema = new mongoose.Schema({
  device: {
    type: String,
    required: [true, "Please Provide device name"],
  },
  category: {
    type: String,
    required: [true, "Please Provide category name"],
  },
  description: {
    type: String,
    required: [true, "Please Provide description"],
  },
  photo: {
    type: String,
    required: [true, "Please Provide photo"],
  },
});

const RepairDevice = mongoose.model(
  "repair-devices",
  RepairDeviceSchema
);

module.exports = RepairDevice;
