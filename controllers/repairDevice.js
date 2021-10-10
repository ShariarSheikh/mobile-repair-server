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
    await RepairDevice.create(repairDevice);
    res
      .status(201)
      .json({ success: true, message: "Device created successfully" });
  } catch (error) {
    next(error);
  }
};

exports.updateDeviceData = async (req, res, next) => {
  const { id: _id } = req.params;
  const device = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res
        .status(404)
        .json({ success: false, message: "Not found with this id" });
    } else {
      await RepairDevice.findByIdAndUpdate(_id, device, {
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
