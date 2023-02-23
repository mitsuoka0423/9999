import { WebhookEvent, MessageEvent } from '@line/bot-sdk';
import { handleMessageEvent } from './messageEventHandler';

export const handle = async (event: WebhookEvent) => {
  switch (event.type) {
    case 'message':
      await handleMessageEvent(event);
      break;
    default:
      throw new Error(`ハンドリングされないイベントタイプです: ${JSON.stringify(event)}`);
  }
};
