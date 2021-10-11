const mongoose = require("mongoose");

const ServicesStoreSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: [true, "Please Provide location name"],
  },

  lat: { type: Number, required: [true, "Please Provide lat"] },
  long: { type: Number, required: [true, "Please Provide long"] },

  description: {
    type: String,
    required: [true, "Please Provide description"],
  },
  photo: {
    type: String,
    required: [true, "Please Provide photo"],
  },
  imagesFileName: {
    type: String,
    required: [true, "Please Provide images file name"],
  },
});

const ServicesStore = mongoose.model("Services-Store", ServicesStoreSchema);

module.exports = ServicesStore;
