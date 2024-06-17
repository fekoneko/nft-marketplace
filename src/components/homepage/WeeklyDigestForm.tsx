import { useId } from 'react';
import ActionButton from '../common/ActionButton';
import emailIcon from '../../assets/button-icons/email-icon.svg';
import { twMerge } from 'tailwind-merge';

export interface WeeklyDigestFormProps {
  style?: 'horizontal' | 'horizontal-compact' | 'horizontal-no-icon' | 'vertical';
}
const WeeklyDigestForm = ({ style }: WeeklyDigestFormProps) => {
  const emailInputId = useId();

  return (
    <form className={twMerge('flex gap-y-4', style === 'vertical' && 'flex-col')}>
      <label htmlFor={emailInputId} className="offscreen">
        Enter Your Email Address
      </label>
      <input
        id={emailInputId}
        type="email"
        required
        placeholder="Enter Your Email Address"
        className={twMerge('py-3', style !== 'vertical' && 'rounded-r-none py-4')}
      />

      <div className={style !== 'vertical' ? 'rounded-r-[1.25rem] bg-white' : undefined}>
        <ActionButton
          type="submit"
          icon={style !== 'horizontal-no-icon' ? emailIcon : undefined}
          withAccent
          disableAnimation
          className={twMerge('w-full py-3', style !== 'vertical' && 'py-4')}
        >
          <span className={style === 'horizontal-compact' ? 'hidden' : undefined}>Subscribe</span>
        </ActionButton>
      </div>
    </form>
  );
};
export default WeeklyDigestForm;
