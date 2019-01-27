const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
const cors = require('cors');
const path = require("path");

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
    auth: {
      user: keys.mongoUser,
      password: keys.mongoPassword
    }, useNewUrlParser: true
  })
  .then(() => console.log('mongo connection successful'))
  .catch((err) => console.error(err));


app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.resolve('./client/build')));

require('./routes/authRoutes')(app);
// this sets our dynamic PORT, from underlying environment
const PORT =  process.env.PORT || 5000;
const environment = process.env.ENV || 'dev';

if (environment === "dev"){
    console.log("\x1b[31m", "ENVIRONMENT IS DEV - ENSURE THAT THIS IS NOT SHOWING WHEN DEPLOYED", "\x1b[0m");
    process.ENV = 'dev';
} else if (environment === "prod") {
    console.log("\x1b[34m", "RUNNING IN PROD", "\x1b[0m")
}


// tells express to tell node to listen to port
app.listen(PORT);
