import { TextMessage, Message } from "@line/bot-sdk";

export const handleTextMessage = async (
  textMessage: TextMessage
): Promise<Message[]> => {
  return [
    {
      type: "text",
      text: textMessage.text,
    },
  ];
};
