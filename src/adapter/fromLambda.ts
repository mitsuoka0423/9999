import { APIGatewayEvent } from 'aws-lambda';
import { handle } from "../eventHandler";

export const adapter = async (event: APIGatewayEvent) => {
  if (event.body) {
	  return handle(JSON.parse(event.body));
  }
};
