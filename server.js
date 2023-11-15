const express = require('express')
require('dotenv').config()

const cors = require('cors')
const Profile = require("./model/profileModel");


// const passportSetup = require("./util/passport");
// const passport = require("passport");

const cookieParser = require('cookie-parser')
const connectDb = require('./db')
const mongoose = require('mongoose')

const PORT = process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.Promise = global.Promise;

app.use(cookieParser(process.env.COOKIE_SECRET)) 
app.use(cors())


// app.use(passport.initialize());
// app.use(passport.session());

app.use(`/api/`, require('./route/authRoute'))
app.post('/profile', async (req, res) => {
    try {
      const newProfile = await Profile.create(req.body);
      res.json({ msg: 'Profile created successfully', data: newProfile });
    } catch (err) {
      res.status(500).json({ msg: 'Error creating profile', error: err.message });
    }
  });

  app.get('/api/profile', async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).json(profiles);
    } catch (err) {
        res.status(500).json({ msg: 'Error fetching profiles', error: err.message });
    }
});


app.all('*', (req,res,next) => {
    res.status(404).json({ msg: `requested path not found, try '/api/'`})
    next()
})

app.listen(PORT, async () => {
    await connectDb(process.env.MONGO_URL)
    console.log(`server is started @ http://localhost:${PORT}`)
})
