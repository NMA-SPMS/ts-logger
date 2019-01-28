import { TransformableInfo } from 'logform';

export interface IGenericLog extends TransformableInfo {
  env: string;
  file: string;
  tags: string[] | undefined;
  timestamp?: string;
  type?: string;
}

export interface IMethodLog extends IGenericLog {
  method: string;
}

export interface IHttpRequestLog extends IGenericLog {
  path: string;
  body?: string;
  cookies?: string;
  hostanme: string;
  ip: string;
  httpMethod: string;
  httpVersion: string;
}
