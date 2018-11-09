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


// tells express to tell node to listen to port 5000
app.listen(5000);
