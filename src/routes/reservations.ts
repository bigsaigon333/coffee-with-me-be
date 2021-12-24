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

export default router;
