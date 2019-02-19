import * as Express from 'express';
import { BasicLog, HttpRequestLog, MethodLog } from './classes';
import { methodLogger } from './classes/decorators/method-logger';
import { LogLevels, LogTypes } from './enums/logger';
import { parseFilePath } from './utils/file';
import logger from './winston';

export const httpReqLog = (level: string, filePath: string, req: Express.Request, tags?: string[]) => {
  const customLog: HttpRequestLog = new HttpRequestLog(level, filePath, req, tags);
  logger[level](Object.assign({}, customLog.getLog(), { toString: customLog.toString }));
};

export const basicLog = (level: string, filePath: string, message: string, tags?: string[]): void => {
  const customLog: BasicLog = new BasicLog(level, filePath, message, tags);
  logger[level](Object.assign({}, customLog.getLog(), { toString: customLog.toString }));
};

export const methodLog = (level: string, filePath: string, message: string, method: string, tags?: string[]): void => {
  const customLog: MethodLog = new MethodLog(level, filePath, message, method, tags);
  logger[level](Object.assign({}, customLog.getLog(), { toString: customLog.toString }));
};

export { LogLevels, LogTypes, parseFilePath, methodLogger };
