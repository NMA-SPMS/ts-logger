// import getCaller = require('get-caller-file');
import { LogLevels } from '../../enums/logger';
import { methodLog, parseFilePath } from '../../index';

export function methodLogger(filename: string, customMessage?: string, level: LogLevels = LogLevels.info) {
  return (target: object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    const originalMethod = descriptor.value;

    const message = customMessage ? customMessage : `Method "${methodName}" called`;
    if (originalMethod.constructor.name === 'AsyncFunction') {
      descriptor.value = async function(...args: any[]) {
        methodLog(level, filename, message, methodName);
        try {
          return await originalMethod.apply(this, args);
        } catch (error) {
          methodLog(LogLevels.error, filename, error.toString(), methodName);
          throw error;
        }
      };
    } else {
      descriptor.value = function(...args: any[]) {
        methodLog(level, filename, message, methodName);
        try {
          return originalMethod.apply(this, args);
        } catch (error) {
          methodLog(LogLevels.error, filename, error.toString(), methodName);
          throw error;
        }
      };
    }
    return descriptor;
  };
}
