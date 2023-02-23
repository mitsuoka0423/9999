import { WebhookEvent } from '@line/bot-sdk';
import { handleMessageEvent } from './messageEventHandler';

export const handle = async (event: WebhookEvent) => {
  if (event.type === 'message') {
    await handleMessageEvent(event as MessageEvent);
  }
};
