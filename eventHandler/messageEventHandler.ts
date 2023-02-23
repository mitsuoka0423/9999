import { MessageEvent, Message } from "@line/bot-sdk";

export const handleMessageEvent = async (messageEvent: MessageEvent): Promise<Message[]> => {
  if (textEventMessage.message.text === "一問一答") {
    messages = singleQuestion();
  }
};
