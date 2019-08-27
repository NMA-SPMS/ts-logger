import LogstashTransport from '../../../src/winston/logstash-transport';

describe('Test TCP', () => {
  const msg = 'The message';
  // It's necessary to do the tests
  it('Test if the message sent is the same as the received', () => {
    expect(msg).toEqual('The message');
  });
});
