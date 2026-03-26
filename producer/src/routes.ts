import { Router } from "express";
import { sendMessage } from "./rabbitMQ/sendMessage";
import { OrdersInputSchema } from "./types";
import { ZodError } from "zod";

const router = Router();
const ROUTING_KEY = process.env.ROUTING_KEY as string;

router.post("/orders", async (req, res) => {
  try {
    const order = OrdersInputSchema.parse(req.body);
    const id = crypto.randomUUID();
    await sendMessage(ROUTING_KEY, { id, ...order }, "orders-producer");
    res.status(201).send("Order created successfully");
  } catch (e) {
    console.error(e);
    if (e instanceof ZodError) {
      res.status(400).json({ code: 400, issues: e.issues });
    }
  }
});

export default router;
