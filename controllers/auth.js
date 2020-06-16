const User = require("../models/user");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const { errorHandler } = require("../helpers/dbErrorHandler");

exports.signup = (req, res) => {
  // console.log(req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err: errorHandler(err) });
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

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User is not exist",
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
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token"), res.json({ message: "SignOut Success" });
};

exports.requireSignin = expressJwt({
  secret: "shhhhhhared-secret-top",
  userProperty: "auth",
});
