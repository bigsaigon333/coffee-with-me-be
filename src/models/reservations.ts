export interface Reservation {
  id: string;
  date: Date;
  status: "pending" | "fulfilled" | "rejected";
  message: string;
  name: string;
  contact: string;
}

const reservations: Reservation[] = [];

export default reservations;
