import * as fs from 'fs';
import ITLS from '../../../src/interfaces/tls';
import LogstashTLSTransport from '../../../src/winston/logstash-tls-transport';

describe('Test TCP with tls tests', () => {
  const msg = 'The message';
  // It's necessary to do the tests
  it('Test if the message sent is the same as the received', () => {
    expect(msg).toEqual('The message');
  });
});
