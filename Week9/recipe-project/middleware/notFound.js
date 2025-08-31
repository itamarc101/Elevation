function notFound(req, res, next) {
  res.status(404).json({ error: true, message: 'Route not found', statusCode: 404 });
}

module.exports = notFound;