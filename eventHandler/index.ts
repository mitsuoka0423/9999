import { config } from "dotenv";
import { WebhookEvent, Message, Client, ClientConfig } from '@line/bot-sdk';
import { handleMessageEvent } from './messageEventHandler';

config();

if (!process.env.CHANNEL_ACCESS_TOKEN) {
  throw new Error("CHANNEL_ACCESS_TOKEN is required");
}
const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN;

if (!process.env.CHANNEL_SECRET) {
  throw new Error("CHANNEL_SECRET is required");
}
const channelSecret = process.env.CHANNEL_SECRET;

const clientConfig: ClientConfig  = {
  channelAccessToken,
  channelSecret,
};
const client = new Client(clientConfig);

export const handle = async (event: WebhookEvent) => {
  console.info('[START]eventHandler/handle');
  console.debug(`event: ${JSON.stringify(event, null, 2)}`);

  let messages: Message[];

  switch (event.type) {
    case 'message':
      messages = await handleMessageEvent(event);
      break;
    default:
      throw new Error(`ハンドリングされないイベントタイプです: ${JSON.stringify(event)}`);
  }

  if (messages.length >= 1) {
    await client.replyMessage(event.replyToken, messages);
  }

  console.info('[END  ]eventHandler/handle');
};
