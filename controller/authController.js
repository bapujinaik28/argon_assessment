const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createAccessToken } = require("../util/token");

const authController = {
  register: async (req, res) => {
    try {
      const { userName, firstName, lastName, email, password } = req.body;

      // password encryption
      const encPass = await bcrypt.hash(password, 10); // hash(pass,salt)

      // creating new user in db
      const newUser = await User.create({
        userName,
        firstName,
        lastName,
        email,
        password: encPass,
      });

      res.json({ msg: "User registered successfully", user: newUser });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // validating user email
      let extUser = await User.findOne({ email });
      if (!extUser)
        return res.status(400).json({ msg: "User doesn't exists." });

      // password compare - bcrypt.compare(string,salt)
      const isMatch = await bcrypt.compare(password, extUser.password);
      if (!isMatch)
        return res.status(400).json({ msg: "passwords doesn't match" });

      res.json({ msg: "Login Successfully" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = authController;
