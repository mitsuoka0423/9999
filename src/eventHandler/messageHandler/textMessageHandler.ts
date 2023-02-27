import { TextMessage, Message } from "@line/bot-sdk";

import { singleQuestion, checkAnswer, quit, nineQuestion } from '../../service';

export const handleTextMessage = async (
  textMessage: TextMessage
): Promise<Message[]> => {
  if (textMessage.text.match(checkAnswer.pattern)) {
    return checkAnswer.execute(textMessage);
  }

  if (textMessage.text.match(singleQuestion.pattern)) {
    return singleQuestion.execute(textMessage);
  }

  if (textMessage.text.match(nineQuestion.pattern)) {
    return nineQuestion.execute(textMessage);
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
