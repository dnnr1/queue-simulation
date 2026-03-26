import { consumeMessages } from "../../rabbitMQ/consumeMessages";

const ROUTING_KEY = process.env.ROUTING_KEY as string;
const QUEUE = process.env.QUEUE_EMAIL as string;

export function startEmailConsumer() {
  consumeMessages(ROUTING_KEY, QUEUE, "email-consumer", "email-connection");
}
