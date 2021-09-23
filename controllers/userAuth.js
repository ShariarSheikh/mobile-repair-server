const User = require("../models/UserSchema");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
  const { name, email, password, profileImg } = req.body;

  if (!name || !email || !password) {
    return next(new ErrorResponse("Please provide email and password", 400));
  }

  try {
    const user = await User.create({ name, email, password, profileImg });
    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }
    isMatch && sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.userProfile = async (req, res, next) => {
  res.status(200).json({ success: true, message: req.user });
};

const sendToken = async (user, statusCode, res) => {
  const token = await user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
