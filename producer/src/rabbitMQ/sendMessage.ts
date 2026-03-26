import { getChannel } from "./connection";
import "dotenv/config";

const EXCHANGE = process.env.EXCHANGE as string;
const EXCHANGE_TYPE = process.env.EXCHANGE_TYPE as string;

export async function sendMessage(
  routingKey: string,
  message: unknown,
  connectionName: string,
) {
  const channel = await getChannel(connectionName);

  await channel.assertExchange(EXCHANGE, EXCHANGE_TYPE, {
    durable: true,
  });

  channel.publish(EXCHANGE, routingKey, Buffer.from(JSON.stringify(message)), {
    persistent: true,
  });
}
