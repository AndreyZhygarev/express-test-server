const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname + "/build")));

app.get("/", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (_req, _res) => {
  console.log(`server is running on port ${PORT}`);
});
