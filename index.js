const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
const cors = require('cors');

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


require('./routes/authRoutes')(app);
// this sets our dynamic PORT, from underlying environment
const PORT =  process.env.PORT || 5000;
// tells express to tell node to listen to port
app.listen(PORT);
