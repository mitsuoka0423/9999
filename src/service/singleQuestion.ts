import { Action, Message, TextMessage } from "@line/bot-sdk";

import { QuestionAndOptionsRandomGenerator } from "../domain/QuestionAndOptionsRandomGenerator";

const randomGenerator = new QuestionAndOptionsRandomGenerator();

export const singleQuestion = {
	pattern: /一問一答/,
	execute: (textMessage: TextMessage): Message[] => {
		const questionAndOptions = randomGenerator.generate();

		const actions: Action[] = questionAndOptions.options.map(
			(option): Action => {
				return {
					type: "message",
					text: option.formula,
					label: String(option.value),
				};
			},
		);

		return [
			{
				type: "template",
				altText: questionAndOptions.question,
				template: {
					type: "buttons",
					text: questionAndOptions.question,
					actions,
				},
			},
		];
	},
};
