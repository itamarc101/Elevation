const express = require("express");
const morgan = require("morgan");
const recipesRouter = require("./routes/recipes");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

const app = express();
const PORT = process.env.PORT || 3000;

// Logging
morgan.token("date", function () {
  return new Date().toISOString();
});
app.use(
  morgan(":date :method :url :status :res[content-length] - :response-time ms")
);

// JSON body parser
app.use(express.json());

// Routes
app.use("/api/recipes", recipesRouter);

// 404
app.use(notFound);

// Error handler
app.use(errorHandler);

if (process.env.JEST_WORKER_ID === undefined) {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

module.exports = app;
