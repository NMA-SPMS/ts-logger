import * as Express from 'express';
import { LogTypes } from '../enums/logger';
import { IHttpRequestLog } from '../interfaces/logger';
import GenericLog from './generic-logger';

export default class HttpRequestLog extends GenericLog {
  protected path: string;
  protected ip: string;
  protected httpVersion: string;
  protected httpMethod: string;
  protected hostanme: string;
  protected body: string;
  protected cookies: string;

  constructor(level: string, filePath: string, req: Express.Request, tags?: string[]) {
    super(level, filePath, ' ', tags);
    this.path = req.path;
    this.ip = req.ip;
    this.httpVersion = req.httpVersion;
    this.httpMethod = req.method;
    this.hostanme = req.hostname;
    this.body = req.body;
    this.cookies = req.cookies;
    this.type = LogTypes.httpReq;
  }
  public getLog(): IHttpRequestLog {
    return {
      ...this.getGenericLog(),
      type: this.type,
      path: this.path,
      ip: this.ip,
      httpVersion: this.httpVersion,
      httpMethod: this.httpMethod,
      hostanme: this.hostanme,
      body: this.body,
      cookies: this.cookies,
    };
  }
  public toString(): string {
    return `type:[${this.type}] timestamp:[${this.timestamp}] env:[${this.env}] level:[${this.level}] file:[${
      this.file
    }]${this.tags ? ` tags:[${this.tags}]` : ''} method:[${this.httpMethod}] version:[${this.httpVersion}] ip:[${
      this.ip
    }] hostname:[${this.hostanme}] path:[${this.path}]`;
  }
}
