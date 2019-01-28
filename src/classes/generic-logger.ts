import { IGenericLog } from '../interfaces/logger';

export default abstract class GenericLog {
  protected env: string;
  protected file: string;
  protected level: string;
  protected message: string;
  protected tags?: string[];
  protected timestamp?: string;
  protected type?: string;

  constructor(level: string, filePath: string, message: string, tags?: string[]) {
    this.env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';
    this.file = filePath;
    this.level = level;
    this.message = message;
    this.tags = tags;
  }

  public abstract getLog(): IGenericLog;

  public abstract toString(): string;

  public getGenericLog(): IGenericLog {
    return { env: this.env, file: this.file, level: this.level, message: this.message, tags: this.tags };
  }
}
