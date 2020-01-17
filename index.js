/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Go code!
*/
//WTF!!!! THIS IS A TIMED TEST AND WE NEED TO DO A YT VID TO GET ALL OUR INSTRUTIONS????
//NOW AM PISSED, AND MAD, THIS IS A TIMED TEST DONT WASTE MY DAM TIME WITH A BE HAPPY VID!!!!


//Dependancies
const express = require("express");

// Import Data
//const TestData = require("./data/lambda.db3");
//const ProjectModel = require("./data/helpers/projectModel.js");
//const ActionModel = require("./data/helpers/actionModel.js");

//START WITH EXPRESS
const server = express();


//CUSTOME MILLEWHARE/HANDLE FUNCTIONS OR INPORTS OF
function logger(request, responce, next) {
  const { method, originalUrl } = request;
  console.log(`${method} to ${originalUrl} at ${Date(Date.now())}`);

  next();
}

//MIDDLE WARE
server.use(express.json());
server.use(logger);

//ROUTES
const projectModelRouter = require('./routs/projectModelRouter.js');
const actionModelRouter = require('./routs/actionModelRouter.js');

//ENDPOINTS
server.get('/', logger, (req, res) => {
  res.send(`<h2>NO BE HAPPY THAT WAS AT BEST DISTRACKING, it would have been more apropriate to post in slack 20 min before</h2>`);
});

server.use('/api/projectModel', projectModelRouter);
server.use('/api/actionModel', actionModelRouter);

//LISTEN SERVER
const port = 8002;
server.listen(port, () => console.log((`\n ** api on: ${port} ** \n`)));
