import { TextMessage, Message } from "@line/bot-sdk";

import { singleQuestion, checkAnswer, quit } from '../../service';

export const handleTextMessage = async (
  textMessage: TextMessage
): Promise<Message[]> => {
  if (textMessage.text.match(checkAnswer.pattern)) {
    return checkAnswer.execute(textMessage);
  }

  if (textMessage.text.match(singleQuestion.pattern)) {
    return singleQuestion.execute(textMessage);
  }

  if (textMessage.text.match(quit.pattern)) {
    return quit.execute(textMessage);
  }

  return [
    {
      type: "text",
      text: "対応していないメッセージです。\n申し訳ありませんが、他のメッセージをお送りください。",
    },
  ];
};
