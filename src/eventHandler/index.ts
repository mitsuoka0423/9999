import { Client, WebhookEvent, Message } from "@line/bot-sdk";
import { channelAccessToken, channelSecret } from "../library/line/env";
import { handleMessageEvent } from "./messageEventHandler";

const client = new Client({ channelAccessToken, channelSecret });

export const handle = async (event: WebhookEvent) => {
	console.info("[START]eventHandler/handle");
	console.debug(`event: ${JSON.stringify(event, null, 2)}`);

	let messages: Message[];

	switch (event.type) {
		case "message":
			messages = await handleMessageEvent(event);
			break;
		default:
			throw new Error(
				`ハンドリングされないイベントタイプです: ${JSON.stringify(event)}`,
			);
	}

	if (messages.length >= 1) {
		await client.replyMessage(event.replyToken, messages);
	}

	console.info("[END  ]eventHandler/handle");
};
