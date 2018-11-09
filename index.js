const express = require('express');
const app = express();

/*
app: express app to register route with
get: watch for incoming requests
'/': watch for requests trying to access '/' -> this is a route
req: object representing incoming request
res: object representing the outgoing response
*/
app.get('/', (req, res) => {
  res.send({ request: 'result'});
});


// this sets our dynamic PORT, from underlying environment
const PORT =  process.env.PORT || 5000;
// tells express to tell node to listen to port
app.listen(PORT);
