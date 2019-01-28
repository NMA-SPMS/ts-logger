import { Format, TransformableInfo } from 'logform';
import { createLogger, format, transports } from 'winston';
import { LogLevels } from '../enums/logger';

const { combine, timestamp, colorize, align } = format;
const errorFile = __dirname + '/error.log';
const combinedFile = __dirname + '/combined.log';

const customPrintf = (info: TransformableInfo): string => info.toString();

const baseFormats: Format[] = [
  timestamp(),
  align(),
  // format.json(),
  format.printf(customPrintf),
];

const logger: any = createLogger({
  level: LogLevels.debug,
  transports: [
    //
    // - Write to all logs with level `debug` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({
      filename: errorFile,
      format: combine(...baseFormats),
      level: LogLevels.error,
    }),
    new transports.File({
      filename: combinedFile,
      format: combine(...baseFormats),
    }),
  ],
});

if (process.env.NODE_ENV !== 'prod' && process.env.NODE_ENV !== 'qual') {
  logger.add(
    new transports.Console({
      format: combine(colorize(), ...baseFormats),
    }),
  );
} else {
  logger.add(
    new transports.Console({
      format: combine(...baseFormats),
    }),
  );
}

export default logger;
