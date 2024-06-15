import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon';

export interface ActionButtonProps {
  icon?: string;
  children?: ReactNode;
  withAccent?: boolean;
}
const ActionButton = ({
  icon,
  children,
  withAccent,
  ...buttonAttributes
}: ActionButtonProps & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...buttonAttributes}>
      <div
        className={twMerge(
          'flex justify-center gap-3 rounded-[1.25rem] px-8 py-4 font-semibold transition-all [:hover>&]:-translate-y-1',
          withAccent
            ? 'bg-accent [:hover>&]:bg-accent-hover'
            : 'border-2 border-accent [:hover>&]:bg-accent-hover/10',
        )}
      >
        {icon && (
          <Icon src={icon} className={twMerge('size-6', withAccent ? 'bg-white' : 'bg-accent')} />
        )}
        {children}
      </div>
    </button>
  );
};
export default ActionButton;
