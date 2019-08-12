import * as fs from 'fs';
import * as net from 'net';
import * as path from 'path';
import * as tls from 'tls';
import ITLS from '../../../src/interfaces/tls';
import LogstashTLSTransport from '../../../src/winston/logstash-tls-transport';

function callB(): void {
  // tslint:disable-next-line:no-console
  console.log('callback');
}

describe('Test TCP with tls tests', () => {
  const certsPath = '/Users/pwst211/Desktop/Projects/spms/other-services/ts-logger/tests/utils/certs/';
  let server: tls.Server;

  beforeAll(async () => {
    const serverOptions = {
      key: fs.readFileSync(certsPath + 'server-key.pem'),
      cert: fs.readFileSync(certsPath + 'server-crt.pem'),
      ca: fs.readFileSync(certsPath + 'ca-crt.pem'),
      requestCert: true,
      rejectUnauthorized: true
    };
    server = tls.createServer(serverOptions, (socket) => {
      // tslint:disable-next-line:no-console
      console.log('server connected');
      // socket.authorized ? 'authorized' : 'unauthorized');
      socket.on('error', (error) => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
      socket.on('data', (data) => {
        // tslint:disable-next-line:no-console
        console.log(data);
      });
    });
    server.listen(5000, () => {
      // tslint:disable-next-line:no-console
      console.log('server bound');
      // transport.log(msg, callB);
    });
  });

  it('Wait for receive', () => {
    try {
      const msg = 'The message';
      const transport = new LogstashTLSTransport({
        host: '127.0.0.1',
        port: 5000,
        options: {
          cert_path: certsPath + 'client1-crt.pem',
          key_path: certsPath + 'client1-key.pem',
          ca_path: certsPath + 'ca-crt.pem'
        } as ITLS
      });
      transport.log(msg, callB);
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  });
  afterAll(async () => {
    server.close();
  });
});
