import { Message, TextMessage, QuickReply } from "@line/bot-sdk";

const pattern = /(\d+)x(\d+)=(\d+)/;

export const checkAnswer = {
	pattern,
	execute: (textMessage: TextMessage): Message[] => {
		const formula = textMessage.text;

		const { multiplicand, multiplier, answer } = pickNumber(formula);
		console.debug({ multiplicand, multiplier, answer });

		if (multiplicand * multiplier === answer) {
			return [
				{
					type: "text",
					text: "正解！",
					quickReply,
				},
			];
		}

		return [
			{
				type: "text",
				text: "不正解...",
			},
			{
				type: "text",
				text: `正解は ${multiplicand * multiplier} だよ`,
				quickReply,
			},
		];
	},
};

const pickNumber = (
	input: string,
): { multiplicand: number; multiplier: number; answer: number } => {
	const group = input.match(pattern);

	if (!group) {
		throw new Error(`数式の読み取りに失敗しました。 ${input}`);
	}
	const [_, multiplicand, multiplier, answer] = group;

	return {
		multiplicand: Number(multiplicand),
		multiplier: Number(multiplier),
		answer: Number(answer),
	};
};

const quickReply: QuickReply = {
	items: [
		{
			type: "action",
			action: {
				type: "message",
				label: "次の問題に進む",
				text: "一問一答",
			},
		},
		{
			type: "action",
			action: {
				type: "message",
				label: "やめる",
				text: "やめる",
			},
		},
	],
};
