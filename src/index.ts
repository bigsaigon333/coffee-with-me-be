import express from "express";
import { PORT } from "./constants";
import { reservationRouter } from "./routes";

const app = express();

app.use(express.json());

app.use("/reservations", reservationRouter);

app.listen(PORT, () => {
  console.log(`Express Server running at http://localhost:${PORT}`);
});
