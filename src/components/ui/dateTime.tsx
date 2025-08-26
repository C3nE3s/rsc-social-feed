import { Small } from "./typography";

export interface DateTimeProps {
  timestamp: Date;
  formatOptions?: Intl.DateTimeFormatOptions;
  className?: string;
}

export const DateTime: React.FC<DateTimeProps> = ({
  timestamp,
  formatOptions,
  className,
}) => {
  return (
    <Small className={className}>
      {timestamp.toLocaleDateString("en-US", formatOptions)}
    </Small>
  );
};
