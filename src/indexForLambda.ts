import { APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

import { adapter } from './adapter/fromLambda';

export const lambdaHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);

  await adapter(event);
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world',
    }),
  };
};
