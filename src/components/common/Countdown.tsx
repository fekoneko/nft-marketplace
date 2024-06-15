import { useEffect, useLayoutEffect, useState } from 'react';

const formatTimerNumber = (number: number) => {
  if (number < 0) return '00';
  if (number < 10) return '0' + number;
  if (number > 99) return '99';
  return number.toString();
};

export interface CountdownProps {
  initialTime: number;
  caption?: string;
}
const Countdown = ({ initialTime, caption }: CountdownProps) => {
  const [hours, setHours] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);

  useLayoutEffect(() => {
    setHours(Math.floor(initialTime / 3600));
    setMinutes(Math.floor((initialTime % 3600) / 60));
    setSeconds(initialTime % 60);
  }, [initialTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev === 0 ? 59 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    if (seconds === 0) setMinutes((prev) => (prev === 0 ? 59 : prev - 1));
  }, [seconds]);

  useLayoutEffect(() => {
    if (minutes === 0) setHours((prev) => prev - 1);
  }, [minutes]);
  return (
    <div className="flex justify-center rounded-[1.25rem] bg-background-secondary/50 p-[1.875rem] font-mono">
      <div className="flex flex-col gap-2.5">
        {caption && <p className="text-xs">{caption}:</p>}

        <div className="flex items-start gap-2">
          <div>
            <p className="text-4xl font-semibold leading-[2.85rem]">{formatTimerNumber(hours)}</p>
            <p className="text-xs">Hours</p>
          </div>
          <p className="text-3xl font-semibold leading-10">:</p>
          <div>
            <p className="text-4xl font-semibold leading-[2.85rem]">{formatTimerNumber(minutes)}</p>
            <p className="text-xs">Minutes</p>
          </div>
          <p className="text-3xl font-semibold leading-10">:</p>
          <div>
            <p className="text-4xl font-semibold leading-[2.85rem]">{formatTimerNumber(seconds)}</p>
            <p className="text-xs">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Countdown;
