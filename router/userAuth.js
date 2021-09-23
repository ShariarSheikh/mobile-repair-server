const express = require("express");
const { register, login, userProfile } = require("../controllers/userAuth");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/profile").get(protect,userProfile)

module.exports = router;
