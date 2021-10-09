const express = require("express");
const {
  getDevices,
  createDevice,
  updateDeviceData,
  deleteDeviceData,
} = require("../controllers/repairDevice");

const router = express.Router();

router.route("/get").get(getDevices);
router.route("/create").post(createDevice);
router.route("/update/:id").patch(updateDeviceData);
router.route("/delete/:id").delete(deleteDeviceData);

module.exports = router;
