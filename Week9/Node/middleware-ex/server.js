const express = require("express");
const app = express();

const PORT = 3000;

// Import middlewares
const logger = require("./middleware/logger");
const requestCounter = require("./middleware/requestCounter");

// Apply middlewares
app.use(logger);
app.use(requestCounter);

// Import routes
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

app.listen(PORT, () => {
  console.log(`middleware exercise listening on http://localhost:${PORT}`);
});
