import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const STAGE = process.env.STAGE;
const REGION = process.env.REGION;

function logMetadata() {
  console.log('environment variables:', { STAGE, REGION });
}

export const hello = async (event:APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logMetadata();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    },
    null,
    2),
  };
};
