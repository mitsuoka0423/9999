import { Action, Message, TextMessage } from "@line/bot-sdk";

export const nineQuestion = {
	pattern: /(\d+)の段/,
	execute: (textMessage: TextMessage): Message[] => {
		const nineQuestion = [
      '12x11=132',
      '12x12=144',
      '12x13=156',
      '12x14=168',
      '12x15=180',
      '12x16=192',
      '12x17=204',
      '12x18=216',
      '12x19=228',
    ];

		return [
			{
				type: "text",
				text: nineQuestion.join('\n')
			},
		];
	},
};
