import { FC, useEffect, useState } from 'react';

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

const formatTimerNumber = (number: number) => {
  if (number < 0) return '00';
  if (number < 10) return '0' + number;
  if (number > 99) return '99';
  return number.toString();
};

export interface CountdownProps {
  caption?: string;
}

export const Countdown: FC<CountdownProps> = ({ caption }) => {
  const [time, setTime] = useState<Time>({ hours: 59, minutes: 59, seconds: 59 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => ({
        seconds: prev.seconds === 0 ? 59 : prev.seconds - 1,
        minutes: prev.seconds === 0 ? (prev.minutes === 0 ? 59 : prev.minutes - 1) : prev.minutes,
        hours: prev.minutes === 0 ? prev.hours - 1 : prev.hours,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center rounded-[1.25rem] bg-background-secondary/50 p-[1.875rem] font-mono">
      <div className="flex flex-col gap-2.5">
        {caption && <p className="text-xs">{caption}:</p>}

        <div className="flex items-start gap-2">
          <div>
            <p className="text-4xl font-semibold leading-[2.85rem]">
              {formatTimerNumber(time.hours)}
            </p>
            <p className="text-xs">Hours</p>
          </div>
          <p className="text-3xl font-semibold leading-10">:</p>
          <div>
            <p className="text-4xl font-semibold leading-[2.85rem]">
              {formatTimerNumber(time.minutes)}
            </p>
            <p className="text-xs">Minutes</p>
          </div>
          <p className="text-3xl font-semibold leading-10">:</p>
          <div>
            <p className="text-4xl font-semibold leading-[2.85rem]">
              {formatTimerNumber(time.seconds)}
            </p>
            <p className="text-xs">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
