import { LogTypes } from '../enums/logger';
import { IGenericLog } from '../interfaces/logger';
import GenericLog from './generic-logger';

export default class BasicLog extends GenericLog {
  constructor(level: string, filePath: string, message: string, tags?: string[]) {
    super(level, filePath, message, tags);
    this.type = LogTypes.basic;
  }

  public getLog(): IGenericLog {
    return { ...this.getGenericLog(), type: this.type };
  }

  public toString(): string {
    return `type:[${this.type}] timestamp:[${this.timestamp}] env:[${this.env}] level:[${this.level}] file:[${
      this.file
    }]${this.tags ? ` tags:[${this.tags}]` : ''} <[message]>${this.message.replace('\t', '')}<[message]>`;
  }
}
