import "dotenv/config";
import { getChannel } from "./connection";

const EXCHANGE = process.env.EXCHANGE as string;
const EXCHANGE_TYPE = process.env.EXCHANGE_TYPE as string;

export async function consumeMessages(
  routingKey: string,
  queueName: string,
  consumerName: string,
  connectionName: string,
) {
  const channel = await getChannel(connectionName);

  await channel.assertExchange(EXCHANGE, EXCHANGE_TYPE, {
    durable: true,
  });

  const { queue } = await channel.assertQueue(queueName, {
    durable: true,
  });

  await channel.bindQueue(queue, EXCHANGE, routingKey);

  console.log(`[${consumerName}] Waiting for messages...`);

  channel.consume(queue, (msg) => {
    if (!msg) return;
    const content = JSON.parse(msg.content.toString());
    console.log(`[${consumerName}] Received:`, content);
    channel.ack(msg);
  });
}
