import * as net from 'net';
import LogstashTransport from '../../src/winston/logstash-transport';

describe('Transport BasicLog class tests', () => {
  let transp: LogstashTransport;
  const options = {
    host: 'localhost',
    port: '5000'
  };
  beforeAll(() => {
    transp = new LogstashTransport(options);
  });

  it('Test Logstash Transport constructor', () => {
    expect(transp).toBeDefined();
    expect(transp).toBeInstanceOf(LogstashTransport);
  });

  it('must create tcp connection', () => {
    net.Socket.prototype.connect = jest.fn().mockImplementationOnce(() => {
      return {
        body: {}
      };
    });
    transp.log({}, () => undefined);
    expect(net.Socket.prototype.connect).toHaveBeenCalled();
  });

  it('must throw tcp connection error', () => {
    try {
      net.Socket.prototype.connect = jest.fn().mockImplementationOnce(() => {
        throw new Error('');
      });
      transp.log({}, () => undefined);
      expect(net.Socket.prototype.connect).toHaveBeenCalled();
    } catch (error) {
      expect(error).toEqual(new Error('Connection Error, due to unreachable host or due to the sending data.'));
    }
  });
});
