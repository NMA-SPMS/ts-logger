import * as fs from 'fs';
import * as path from 'path';
import * as tls from 'tls';
import * as transport from 'winston-transport';
import { ITLS } from '../interfaces';
import ITransport from '../interfaces/transport';

export default class LogstashTLSTransport extends transport {
  private tcpOptions: ITransport;
  private certInfo: ITLS;
  constructor(opts: any) {
    super(opts);
    this.tcpOptions = { host: opts.host, port: opts.port };
    this.certInfo = opts.options;
  }

  public log(info: any, callback: () => void) {
    try {
      setImmediate(() => {
        this.emit('logged', info);
      });
      const options = {
        key: fs.readFileSync(path.resolve(this.certInfo.key_path)),
        cert: fs.readFileSync(path.resolve(this.certInfo.cert_path)),
        ca: fs.readFileSync(path.resolve(this.certInfo.ca_path)),
        requestCert: true,
        rejectUnauthorized: true,
      };
      const cli = tls.connect(
        this.tcpOptions.port,
        this.tcpOptions.host,
        options, () => {
        // Check if the authorization worked
        if (cli.authorized) {
          cli.write(info.toString());
          cli.end();
        } else {
          throw new Error('Client do not have authorization.');
        }
    });
      callback();
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
      throw new Error('Connection Error, due to unreachable host or due to the sending data.');
    }
  }
}
