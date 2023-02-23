import { Request } from 'express';
import { handle } from '../eventHandler';

export const adapter = async (request: Request) => {
  return Promise.all(request.body.events.map(handle));
};
