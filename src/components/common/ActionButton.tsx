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
      <div className="flex justify-center gap-3 rounded-[1.25rem] bg-call-to-action px-8 py-4 font-semibold transition-all [:hover>&]:-translate-y-1 [:hover>&]:bg-call-to-action-hover">
        {icon && <img src={icon} alt="" />}
        {children}
      </div>
    </button>
  );
};
export default ActionButton;
