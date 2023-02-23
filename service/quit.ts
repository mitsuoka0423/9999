import { Message, TextMessage } from "@line/bot-sdk";

export const quit = {
	pattern: /やめる/,
	execute: (textMessage: TextMessage): Message[] => {
		return [
			{
				type: "text",
				text: "お疲れさま!\nまた遊んでね！",
			},
		];
	},
};
