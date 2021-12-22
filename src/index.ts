import express from "express";
import { PORT } from "./constants";

const app = express();

app.get("/", (_, res) => {
  console.log("/");
  res.send(`Hello world! ${Date.now()}`);
});

app.listen(PORT, () => {
  console.log(`Express Server running at http://localhost:${PORT}`);
});
