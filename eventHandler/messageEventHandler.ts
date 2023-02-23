import { MessageEvent, Message } from "@line/bot-sdk";
import { handleTextMessage } from "./messageHandler/textMessageHandler";

export const handleMessageEvent = async (
	messageEvent: MessageEvent,
): Promise<Message[]> => {
	const message = messageEvent.message;
	switch (message.type) {
		case "text":
			return await handleTextMessage(message);
		default:
			throw new Error(
				`ハンドリングされないメッセージタイプです: ${JSON.stringify(message)}`,
			);
	}
};
