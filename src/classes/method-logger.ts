import { LogTypes } from '../enums/logger';
import { IMethodLog } from '../interfaces/logger';
import GenericLog from './generic-logger';

export default class MethodLog extends GenericLog {
  protected method: string;

  constructor(level: string, filePath: string, message: string, method: string, tags?: string[]) {
    super(level, filePath, message, tags);
    this.method = method;
    this.type = LogTypes.method;
  }
  public getLog(): IMethodLog {
    return { ...this.getGenericLog(), method: this.method, type: this.type };
  }
  public toString(): string {
    return `type:[${this.type}] timestamp:[${this.timestamp}] env:[${this.env}] level:[${this.level}] file:[${
      this.file
    }]${this.tags ? ` tags:[${this.tags}]` : ''} method:[${this.method}] <[message]>${this.message.replace(
      '\t',
      '',
    )}<[message]>`;
  }
}
