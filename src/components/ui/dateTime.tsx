export interface DateTimeProps {
  timestamp: Date;
  formatOptions?: Intl.DateTimeFormatOptions;
}

export const DateTime = ({ timestamp, formatOptions }: DateTimeProps) => {
  return <span>{timestamp.toLocaleDateString("en-US", formatOptions)}</span>;
};
