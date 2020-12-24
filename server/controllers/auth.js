const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const os = require("os");

const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.signup = (req, res) => {
  const user = new User(req.body);

  user.hostname = os.hostname();
  user.platform = os.platform();
  user.version = os.version();
  user.arch = os.arch();

  console.log("Add new user", user);

  user.save((error, user) => {
    if (error) {
      return res.status(400).json({ error: errorHandler(error) });
    }
    user.salt = undefined;
    user.hashed_password = undefined;

    res.json({
      user,
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: "User is not exist",
      });
    }
    //
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password dont match",
      });
    }
    //
    const token = jwt.sign({ _id: user._id }, "shhhhhhared-secret-top");

    // persist the token as "token" in cookie with a date;
    res.cookie("token", token, { expire: new Date() + 9999 });

    // return res with user and token to front.client
    const { _id, name, email, role, platform } = user;
    return res.json({ token, user: { _id, email, name, role, platform } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token"), res.json({ message: "SignOut Success" });
};

exports.requireSignin = expressJwt({
  secret: "shhhhhhared-secret-top",
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;

  if (!user) {
    return res.status(403).json({
      error: "Access denied Please complete registeration.",
    });
  }

  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "Admin resourse! Admin denied",
    });
  }

  next();
};
