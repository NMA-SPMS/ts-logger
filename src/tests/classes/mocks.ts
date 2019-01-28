import * as Express from 'express';
import { LogLevels, LogTypes } from '../../enums/logger';
import { IGenericLog, IHttpRequestLog, IMethodLog } from '../../interfaces/logger';
// Basic log mocks

export const basicOutLog: IGenericLog = {
  env: process.env.NODE_ENV ? process.env.NODE_ENV : 'dev',
  file: 'src/controllers/new-api/pathology.js',
  level: LogLevels.info,
  message: 'Teste message',
  tags: ['rel'],
  type: LogTypes.basic,
};

export const basicOutLogString: string = `type:[basic] timestamp:[undefined] env:[${
  process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'
}] level:[info] file:[src/controllers/new-api/pathology.js] tags:[rel] <[message]>Teste message<[message]>`;

export const basicOutLogStringWithoutTags: string = `type:[basic] timestamp:[undefined] env:[${
  process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'
}] level:[info] file:[src/controllers/new-api/pathology.js] <[message]>Teste message<[message]>`;

// Method log mocks

export const methodOutLog: IMethodLog = {
  env: process.env.NODE_ENV ? process.env.NODE_ENV : 'dev',
  file: 'src/controllers/new-api/pathology.js',
  level: LogLevels.info,
  message: 'Teste message',
  tags: ['rel'],
  type: LogTypes.method,
  method: 'teste',
};

export const methodOutLogString: string = `type:[method] timestamp:[undefined] env:[${
  process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'
}] level:[info] file:[src/controllers/new-api/pathology.js] tags:[rel] method:[teste] <[message]>Teste message<[message]>`;

export const methodOutLogStringWithoutTags: string = `type:[method] timestamp:[undefined] env:[${
  process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'
}] level:[info] file:[src/controllers/new-api/pathology.js] method:[teste] <[message]>Teste message<[message]>`;

// HttpReq log mocks

export const httpReqOutLog: IHttpRequestLog = {
  env: process.env.NODE_ENV ? process.env.NODE_ENV : 'dev',
  file: 'src/controllers/new-api/pathology.js',
  level: LogLevels.info,
  tags: ['rel'],
  type: LogTypes.httpReq,
  hostanme: 'localhost',
  ip: '::1',
  path: '/v2/pathologies',
  httpMethod: 'GET',
  httpVersion: '1.1',
  message: ' ',
  body: undefined,
  cookies: undefined,
};

export const httpReqOutLogString: string = `type:[httpReq] timestamp:[undefined] env:[${
  process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'
}] level:[info] file:[src/controllers/new-api/pathology.js] tags:[rel] method:[GET] version:[1.1] ip:[::1] hostname:[localhost] path:[/v2/pathologies]`;

export const httpReqOutLogStringWithoutTags: string = `type:[httpReq] timestamp:[undefined] env:[${
  process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'
}] level:[info] file:[src/controllers/new-api/pathology.js] method:[GET] version:[1.1] ip:[::1] hostname:[localhost] path:[/v2/pathologies]`;

export const requestMock: any = {
  method: 'GET',
  httpVersion: '1.1',
  hostname: 'localhost',
  path: '/v2/pathologies',
  ip: '::1',
};
