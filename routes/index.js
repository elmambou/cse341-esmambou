const routes = require('express').Router();

const myController = require('../controllers');

//routes.get('/', (req, res, next) => {
  //  res.json('Awesome person');
//});

routes.get('/', myController.awesomeFunction);
routes.get('/awesome', myController.returnPersonQuality);
routes.get('/trait', myController.traitRoute);

module.exports = routes;