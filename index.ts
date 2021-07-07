import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.resolve(__dirname + "/build")));

app.get("/", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
