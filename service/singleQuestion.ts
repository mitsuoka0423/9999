import { Message, TextMessage } from "@line/bot-sdk";

export const singleQuestion = {
  pattern: /一問一答/,
  execute: (textMessage: TextMessage): Message[] => {
    return [
      {
        type: "template",
        altText: "11かける12の答えを選択してください",
        template: {
          type: "buttons",
          text: '11 x 12 はいくつ？',
          actions: [
            {
              type: "message",
              text: "11x12=112",
              label: "112",
            },
            {
              type: "message",
              text: "11x12=122",
              label: "122",
            },
            {
              type: "message",
              text: "11x12=132",
              label: "132",
            },
            {
              type: "message",
              text: "11x12=142",
              label: "142",
            },
          ]
        }
      },
    ];
  }
};
