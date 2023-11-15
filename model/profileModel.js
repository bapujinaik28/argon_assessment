
// profileModel.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  linkedin: String,
  github: String,
  skills: String,
  experiences: [
    {
      org: String,
      pos: String,
      dur: String,
      desc: String,
    },
  ],
  projects: [
    {
      title: String,
      link: String,
      desc: String,
    },
  ],
  education: [
    {
      school: String,
      year: String,
      qualification: String,
      desc: String,
    },
  ],
  extra_1: String,
  extra_2: String,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
