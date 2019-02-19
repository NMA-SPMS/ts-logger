// import getCaller = require('get-caller-file');
import { LogLevels } from '../../enums/logger';
import { methodLog, parseFilePath } from '../../index';

export function methodLogger(filename: string, customMessage?: string, level: LogLevels = LogLevels.info) {
  return (target: object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    const originalMethod = descriptor.value;

    // todo -> sometimes the below method returns 'reflect-metadata' because typescript
    // const filename = parseFilePath(getCaller());
    const message = customMessage ? customMessage : `Method "${methodName}" called`;

    descriptor.value = function(...args: any[]) {
      methodLog(level, filename, message, methodName);
      let result;
      try {
        result = originalMethod.apply(this, args);
      } catch (error) {
        methodLog(LogLevels.error, filename, error.message, methodName);
        throw error;
      }
      return result;
    };

    return descriptor;
  };
}
