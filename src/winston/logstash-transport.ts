import * as net from 'net';
import * as transport from 'winston-transport';
import ITransport from '../interfaces/transport';

export default class LogstashTransport extends transport {
  private tcpOptions: ITransport;
  private con: net.Socket;
  constructor(opts: any) {
    super(opts);
    this.tcpOptions = { host: opts.host, port: opts.port };
    this.con = new net.Socket();
  }

  public log(info: any, callback: () => void) {
    try {
      setImmediate(() => {
        this.emit('logged', info);
      });
      this.con.connect(this.tcpOptions.port, this.tcpOptions.host, () => {
        this.con.write(info.toString());
        this.con.destroy();
      });
      callback();
    } catch (error) {
      throw new Error('Connection Error, due to unreachable host or due to the sending data.');
    }
  }
}
