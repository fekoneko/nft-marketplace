import { FC, useId } from 'react';
import { ActionButton } from '@/components/common/ActionButton';
import emailIcon from '@/assets/button-icons/email-icon.svg';
import { twMerge } from 'tailwind-merge';

export interface WeeklyDigestFormProps {
  orientation?: 'horizontal' | 'horizontal-compact' | 'horizontal-no-icon' | 'vertical';
}

export const WeeklyDigestForm: FC<WeeklyDigestFormProps> = ({ orientation }) => {
  const emailInputId = useId();

  return (
    <form className={twMerge('flex gap-y-4', orientation === 'vertical' && 'flex-col')}>
      <label htmlFor={emailInputId} className="offscreen">
        Enter Your Email Address
      </label>
      <input
        id={emailInputId}
        type="email"
        required
        placeholder="Enter Your Email Address"
        className={twMerge('py-3', orientation !== 'vertical' && 'rounded-r-none py-4')}
      />

      <div className={orientation !== 'vertical' ? 'rounded-r-[1.25rem] bg-white' : undefined}>
        <ActionButton
          type="submit"
          icon={orientation !== 'horizontal-no-icon' ? emailIcon : undefined}
          withAccent
          disableAnimation
          className={twMerge('w-full py-3', orientation !== 'vertical' && 'py-4')}
        >
          <span className={orientation === 'horizontal-compact' ? 'hidden' : undefined}>
            Subscribe
          </span>
        </ActionButton>
      </div>
    </form>
  );
};
