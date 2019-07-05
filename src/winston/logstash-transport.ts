import * as net from 'net';
import * as transport from 'winston-transport';
import ITransport from '../interfaces/transport';

export default class LogstashTransport extends transport {

  private tcpOptions: ITransport;

  constructor(opts: any) {
    super(opts);
    this.tcpOptions = { host: opts.host, port: opts.port };
  }

  public log(info: any, callback: () => void) {
    try {
      setImmediate(() => {
        this.emit('logged', info);
      });
      const con = new net.Socket();
      con.connect(this.tcpOptions.port, this.tcpOptions.host, () => {
        con.write(info.toString());
        con.destroy();
      });
      callback();
    } catch (error) {
      throw new Error('Connection Error, due to unreachable host or due to the sending data.');
    }
  }
}
