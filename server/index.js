const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

const logRoutes = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(express.static(path.join(__dirname, "../dist")));

app.use(logRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
