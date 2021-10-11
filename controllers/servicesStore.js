const mongoose = require("mongoose");
const ServicesStore = require("../models/ServicesStoreSchema");

exports.getStores = async (req, res, next) => {
  try {
    const servicesStore = await ServicesStore.find();
    res.status(200).json({ success: true, servicesStore });
  } catch (error) {
    next(error);
  }
};

exports.createStores = async (req, res, next) => {
  const newServicesStore = {
    locationName: req.body.locationName,
    description: req.body.description,
    lat: req.body.lat,
    long: req.body.lat,
    photo: `https://stormy-woodland-67379.herokuapp.com/images/servicesStore/${req.file.filename}`,
  };

  try {
    const data = await ServicesStore.create(newServicesStore);
    res.status(201).json({ success: true, message: data });
  } catch (error) {
    next(error);
  }
};

exports.updateStore = async (req, res, next) => {
  const { id: _id } = req.params;
  const device = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res
        .status(404)
        .json({ success: false, message: "Not found with this id" });
    } else {
      await ServicesStore.findByIdAndUpdate(_id, device, {
        new: true,
      });
      return res
        .status(200)
        .json({ success: true, message: "Device updated successfully" });
    }
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

exports.deleteStore = async (req, res, next) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res
        .status(404)
        .json({ success: false, message: "Not found with this id" });
    } else {
      await ServicesStore.findByIdAndRemove({ _id });
      return res.status(200).json({ success: true, message: "Deleted Device" });
    }
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
