const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);
// this sets our dynamic PORT, from underlying environment
const PORT =  process.env.PORT || 5000;
// tells express to tell node to listen to port
app.listen(PORT);
