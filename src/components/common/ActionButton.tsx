import { HTMLAttributes, ReactNode } from 'react';

export interface ActionButtonProps {
  icon?: string;
  children?: ReactNode;
}
const ActionButton = ({
  icon,
  children,
  ...buttonAttributes
}: ActionButtonProps & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...buttonAttributes}>
      <div className="bg-call-to-action [:hover>&]:bg-call-to-action-hover flex gap-3 rounded-[20px] px-8 py-4 font-semibold transition-all [:hover>&]:-translate-y-1">
        {icon && <img src={icon} alt="" />}
        {children}
      </div>
    </button>
  );
};
export default ActionButton;
