import { Logger, ISettingsParam, ILogObj } from "tslog";

// const loggerSettings = {
//   displayInstanceName: false,
//   displayLoggerName: false,
//   displayFilePath: "hidden",
//   displayFunctionName: false,
// };

const loggerSettings = {
	type: "pretty"
}

export class LoggerService {
  public logger: Logger<ILogObj>;

  constructor() {
    this.logger = new Logger(loggerSettings as ISettingsParam<ILogObj>);
  }

  log(...args: unknown[]) {
    this.logger.info(...args);
  }

  error(...args: unknown[]) {
    this.logger.error(...args);
  }

  warn(...args: unknown[]) {
    this.logger.warn(...args);
  }
}
