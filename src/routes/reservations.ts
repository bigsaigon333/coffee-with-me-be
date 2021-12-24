import express from "express";
import { reservations } from "../models";

const router = express.Router();

router
  .get("/", (req, res) => {
    res.json(reservations);
  })
  .post("/", (req, res) => {
    const { date: dateString, message, name, contact } = req.body;
    const date = new Date(dateString);

    const newReservation = {
      id: reservations.length.toString(),
      date,
      status: "pending",
      message,
      name,
      contact,
    } as const;

    reservations.push(newReservation);

    res.location(`${req.baseUrl}/${newReservation.id}`);
    res.status(201).json(newReservation);
  });

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const found = reservations.find((reservation) => reservation.id === id);

  if (!found) {
    res.sendStatus(404);
    return;
  }

  res.status(200).json(found);
});

export default router;
