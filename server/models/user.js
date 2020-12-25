const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1 } = require("uuid");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      // maxlength: 32,
      unique: 32,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },
    salt: String,

    role: {
      type: Number,
      default: 0,
    },
    history: {
      type: Array,
      default: [],
    },
    hostname: {
      type: String,
      trim: true,
      maxlength: 52,
    },
    platform: {
      type: String,
      trim: true,
      maxlength: 32,
    },
    version: {
      type: String,
      trim: false,
      maxlength: 100,
    },
    arch: {
      type: String,
      trim: true,
      maxlength: 32,
    },
  },

  { timestamps: true }
);

// let systemSettings = {
//     name: os.hostname(),
//     platform: os.platform(),
//     versionOs: os.version(),
//     : os.homedir(),
//     userInfo: os.userInfo(),
//     arch: os.arch(),
//     cpus: os.cpus(),
//     loadavg: os.loadavg(),
//     networkInterfaces: os.networkInterfaces(),
//     uptime: os.uptime(),
//     time: new Date(),
//   };
// console.log(systemSettings);

// virtual Field From client
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = v1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";

    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
