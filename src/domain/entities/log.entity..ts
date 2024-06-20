export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public createdAt: Date;

  constructor(message: string, level: LogSeverityLevel, createdAt: Date) {
    this.message = message;
    this.level = level;

    this.createdAt = createdAt;
  }

  static fromJson(json: string): LogEntity {
    const { message, level, createdAt } = JSON.parse(json);
    const log = new LogEntity(message, level, new Date(createdAt));
    return log;
  }
}
