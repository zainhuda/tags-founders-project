const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
const cors = require('cors');
const path = require("path");

//STUFF ADDED BY GARETH
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

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
require('./routes/apiRoutes')(app);
// this sets our dynamic PORT, from underlying environment
const PORT =  process.env.PORT || 5000;
const environment = process.env.ENV || 'dev';


if (environment === "dev"){
    console.log("\x1b[31m", "ENVIRONMENT IS DEV - ENSURE THAT THIS IS NOT SHOWING WHEN DEPLOYED", "\x1b[0m");
} else if (environment === "prod") {
    console.log("\x1b[34m", "RUNNING IN PROD", "\x1b[0m")

    // we need to make sure express can serve production assets
    app.use(express.static('client/build'));

    // we need to make sure we serve index.html to any unkown routes
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirnmae, 'client', 'build', 'index.html'));
    })
}


// tells express to tell node to listen to port
app.listen(PORT);
