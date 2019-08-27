
import { BasicLog, HttpRequestLog, MethodLog } from '../../src/classes';
import { LogLevels } from '../../src/enums/logger';
import {
  basicOutLog,
  basicOutLogString,
  basicOutLogStringWithoutTags,
  httpReqOutLog,
  httpReqOutLogString,
  httpReqOutLogStringWithoutTags,
  methodOutLog,
  methodOutLogString,
  methodOutLogStringWithoutTags,
  requestMock,
} from './mocks';

describe('tls class tests', () => {
  it('must return basic log', () => {
    // tslint:disable-next-line:max-line-length
    const basicLogg: BasicLog = new BasicLog(LogLevels.info, 'src/controllers/new-api/pathology.js', 'Teste message', ['rel']);
    expect(basicLogg.getLog()).toEqual(basicOutLog);
  });
});

describe('BasicLog class tests', () => {
  let basicLogg: BasicLog;
  beforeAll(() => {
    basicLogg = new BasicLog(LogLevels.info, 'src/controllers/new-api/pathology.js', 'Teste message', ['rel']);
  });

  it('must return basic log', () => {
    expect(basicLogg.getLog()).toEqual(basicOutLog);
  });

  it('must return basic log string', () => {
    expect(basicLogg.toString()).toBe(basicOutLogString);
  });

  it('must return method log string without tags', () => {
    // tslint:disable-next-line:no-string-literal
    basicLogg['tags'] = undefined;
    expect(basicLogg.toString()).toBe(basicOutLogStringWithoutTags);
  });
});

describe('MethodLog class tests', () => {
  let methodLog: MethodLog;
  beforeAll(() => {
    methodLog = new MethodLog(LogLevels.info, 'src/controllers/new-api/pathology.js', 'Teste message', 'teste', [
      'rel',
    ]);
  });

  it('must return method log', () => {
    expect(methodLog.getLog()).toEqual(methodOutLog);
  });

  it('must return method log string', () => {
    expect(methodLog.toString()).toBe(methodOutLogString);
  });

  it('must return method log string without tags', () => {
    // tslint:disable-next-line:no-string-literal
    methodLog['tags'] = undefined;
    expect(methodLog.toString()).toBe(methodOutLogStringWithoutTags);
  });
});

describe('HttpReqLog class tests', () => {
  let httpReqLog: HttpRequestLog;
  beforeAll(() => {
    httpReqLog = new HttpRequestLog(LogLevels.info, 'src/controllers/new-api/pathology.js', requestMock, ['rel']);
    // tslint:disable-next-line:no-console
    console.dir(httpReqLog);
  });

  it('must return httpReq log', () => {
    expect(httpReqLog.getLog()).toEqual(httpReqOutLog);
  });

  it('must return httpReq log string', () => {
    expect(httpReqLog.toString()).toBe(httpReqOutLogString);
  });

  it('must return httpReq log string without tags', () => {
    // tslint:disable-next-line:no-string-literal
    httpReqLog['tags'] = undefined;
    expect(httpReqLog.toString()).toBe(httpReqOutLogStringWithoutTags);
  });
});
