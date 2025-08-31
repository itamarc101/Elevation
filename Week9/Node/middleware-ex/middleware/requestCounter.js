let counter = 0;
module.exports = (req, res, next) => {
  counter++;
  req.requestCount = counter;
  next();
};