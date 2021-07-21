import { APIGatewayProxyEvent } from 'aws-lambda';
import { hello } from '../src/handler';

describe('Unit tests for the hello function to check the overall template\' setup integrity', () => {
  it('When the hello function is invoked, Should returns a \'200\' success status code', async () => {
    const event: APIGatewayProxyEvent = {
      httpMethod: 'GET',
      queryStringParameters: {
        foo: 'bar',
      },
    } as any;

    const result = await hello(event);

    expect(result.statusCode).toEqual(200);
  });
});
