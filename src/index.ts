import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import { middleware, MiddlewareConfig } from "@line/bot-sdk";

import { adapter } from "./adapter/fromExpress";
import { channelAccessToken, channelSecret } from './library/line/env';

const middlewareConfig: MiddlewareConfig = {
  channelAccessToken,
  channelSecret,
};

const app = express();
app.use(morgan("combined"));

app.get("/", (_, res) => {
  res.status(200).send("Hello 9999!");
});

app.post("/webhook", middleware(middlewareConfig), bodyParser.json(), (req, _, next) => {
  console.debug(JSON.stringify(req.body, null, 2));
  next();
}, (req, res) => {
  adapter(req).then((result) => res.json(result));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port http://localhost:${port} !`));
