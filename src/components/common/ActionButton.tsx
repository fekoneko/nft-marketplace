import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon';

export interface ActionButtonProps {
  icon?: string;
  children?: ReactNode;
  withAccent?: boolean;
  light?: boolean;
  disableAnimation?: boolean;
}
const ActionButton = ({
  icon,
  children,
  withAccent,
  light,
  disableAnimation,
  ...buttonAttributes
}: ActionButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...buttonAttributes}
      className={twMerge(
        'flex justify-center gap-3 rounded-[1.25rem] px-12 py-4 font-semibold transition-all',
        !disableAnimation && 'hover:-translate-y-1',
        withAccent
          ? light
            ? 'bg-white text-black hover:bg-white/80'
            : 'bg-accent text-white hover:bg-accent-hover'
          : light
            ? 'border-2 border-white text-white hover:bg-accent-hover/10'
            : 'border-2 border-accent text-white hover:bg-accent-hover/10',
        buttonAttributes.className,
      )}
    >
      {icon && (
        <Icon
          src={icon}
          className={twMerge('size-6', withAccent === light ? 'bg-accent' : 'bg-white')}
        />
      )}
      {children}
    </button>
  );
};
export default ActionButton;
