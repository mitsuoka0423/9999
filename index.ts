import { config } from "dotenv";
import express from "express";
import { middleware, MiddlewareConfig } from "@line/bot-sdk";

import { adapter } from "./adapter/fromExpress";

config();

const app = express();

if (!process.env.CHANNEL_ACCESS_TOKEN) {
  throw new Error("CHANNEL_ACCESS_TOKEN is required");
}
const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN;

if (!process.env.CHANNEL_SECRET) {
  throw new Error("CHANNEL_SECRET is required");
}
const channelSecret = process.env.CHANNEL_SECRET;

const middlewareConfig: MiddlewareConfig = {
  channelAccessToken,
  channelSecret,
};

app.get("/", (_, res) => {
  res.status(200).send("Hello 9999!");
});

app.post("/webhook", middleware(middlewareConfig), (req, res) => {
  adapter(req).then((result) => res.json(result));
});

app.listen(3000, () => console.log('listening on port http://localhost:3000 !'));