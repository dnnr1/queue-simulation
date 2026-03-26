import { consumeMessages } from "../../rabbitMQ/consumeMessages";

const ROUTING_KEY = process.env.ROUTING_KEY as string;
const QUEUE = process.env.QUEUE_PAYMENT as string;

export function startPaymentConsumer() {
  consumeMessages(ROUTING_KEY, QUEUE, "payment-consumer", "payment-connection");
}
