const mongoose = require("mongoose");
const RepairDevice = require("../models/RepairDeviceSchema");

exports.getDevices = async (req, res, next) => {
  try {
    const repairDevice = await RepairDevice.find();
    res.status(200).json({ success: true, repairDevice });
  } catch (error) {
    next(error);
  }
};

exports.createDevice = async (req, res, next) => {
  const repairDevice = req.body;

  try {
    const newDevice = await RepairDevice.create(repairDevice);
    res.status(201).json({ success: true, newDevice });
  } catch (error) {
    next(error.message);
  }
};

exports.updateDeviceData = async (req, res, next) => {
  const { id: _id } = req.params;
  const devices = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res
        .status(404)
        .json({ success: false, message: "Not found with this id" });
    } else {
      const updateDevice = await RepairDevice.findByIdAndUpdate(_id, devices, {
        new: true,
      });
      return res.status(200).json({ success: true, message: updateDevice });
    }
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

exports.deleteDeviceData = async (req, res, next) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res
        .status(404)
        .json({ success: false, message: "Not found with this id" });
    } else {
      await RepairDevice.findByIdAndRemove({ _id });
      return res.status(200).json({ success: true, message: "Deleted Device" });
    }
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
