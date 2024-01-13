const awesomeFunction = (req, res, next) => {
    res.json('Marie Antoinette');
  };
const returnPersonQuality = (req, res, next) => {
    res.json('Super Awesome Person');
  };
 
const traitRoute = (req, res, next) => {
    res.json('Loving Kind and Humble');
  };

module.exports = { 
  awesomeFunction, 
  returnPersonQuality, 
  traitRoute
};