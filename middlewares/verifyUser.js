const jwt = require("jsonwebtoken");
const User = require("../models/User");

require("dotenv").config();

exports.verifyUser = async (req, res, next) => {
  const login_token = req.cookies.login_token;
  if (!login_token) {
    return res.status(401).json({
      error: "You need to login First",
    });
  } else {
    jwt.verify(login_token, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        return res.status(401).json({
          error: "Invalid Token or Expired token",
        });
      } else {
        req.user = decode;
        console.log(req.user);
        next();
      }
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  console.log(req.user);
  const user = await User.findById(req.user._id);
  if (user.role !== true) {
    return res.json("Unauthorised for this action");
  }
  next();
};
