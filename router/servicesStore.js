const express = require("express");

const {
  getStores,
  createStores,
  updateStore,
  deleteStore,
  getOne,
} = require("../controllers/servicesStore");
const { upload } = require("../middleware/servicesStore");

const router = express.Router();

router.route("/get").get(getStores);
router.route("/getOne/:id").get(getOne);
router.route("/create").post(upload.single("photo"), createStores);
router.route("/update/:id").patch(upload.single("photo"), updateStore);
router.route("/delete/:id").delete(deleteStore);

module.exports = router;
