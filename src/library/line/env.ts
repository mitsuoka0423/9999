import { config } from 'dotenv';

config();

if (!process.env.CHANNEL_ACCESS_TOKEN) {
  throw new Error("CHANNEL_ACCESS_TOKEN is required");
}
const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN;

if (!process.env.CHANNEL_SECRET) {
  throw new Error("CHANNEL_SECRET is required");
}
const channelSecret = process.env.CHANNEL_SECRET;

export { channelAccessToken, channelSecret };
