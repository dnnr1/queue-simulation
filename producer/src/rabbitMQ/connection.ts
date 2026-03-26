import amqp from "amqplib";
import "dotenv/config";

let connection: amqp.ChannelModel;
let channel: amqp.Channel;

const RABBITMQ_URL = process.env.RABBITMQ_URL as string;

export async function getChannel(connectionName: string) {
  if (channel) return channel;

  connection = await amqp.connect(RABBITMQ_URL, {
    clientProperties: {
      connection_name: connectionName,
    },
  });
  channel = await connection.createChannel();

  return channel;
}
