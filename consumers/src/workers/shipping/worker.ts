import { consumeMessages } from "../../rabbitMQ/consumeMessages";

const ROUTING_KEY = process.env.ROUTING_KEY as string;
const QUEUE = process.env.QUEUE_SHIPPING as string;

export function startShippingConsumer() {
  consumeMessages(
    ROUTING_KEY,
    QUEUE,
    "shipping-consumer",
    "shipping-connection",
  );
}
