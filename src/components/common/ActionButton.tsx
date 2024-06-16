import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon';

export interface ActionButtonProps {
  icon?: string;
  children?: ReactNode;
  withAccent?: boolean;
  light?: boolean;
}
const ActionButton = ({
  icon,
  children,
  withAccent,
  light,
  ...buttonAttributes
}: ActionButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...buttonAttributes}>
      <div
        className={twMerge(
          'flex justify-center gap-3 rounded-[1.25rem] px-8 py-4 font-semibold transition-all [:hover>&]:-translate-y-1',
          withAccent
            ? light
              ? 'bg-white text-black [:hover>&]:bg-white/80'
              : 'bg-accent [:hover>&]:bg-accent-hover'
            : light
              ? 'border-2 border-white [:hover>&]:bg-accent-hover/10'
              : 'border-2 border-accent [:hover>&]:bg-accent-hover/10',
        )}
      >
        {icon && (
          <Icon
            src={icon}
            className={twMerge('size-6', withAccent === light ? 'bg-accent' : 'bg-white')}
          />
        )}
        {children}
      </div>
    </button>
  );
};
export default ActionButton;
