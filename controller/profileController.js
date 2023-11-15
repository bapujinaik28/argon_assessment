
// profileController.js
const Profile = require('../model/profileModel');

exports.createProfile = async (req, res) => {
  try {
    const newProfile = await Profile.create(req.body);
    res.status(201).json({ msg: 'Profile created successfully', data: newProfile });
  } catch (err) {
    res.status(500).json({ msg: 'Error creating profile', error: err.message });
  }
};

