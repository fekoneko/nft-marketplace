import { useId } from 'react';
import promoImage from '../../assets/weekly-digest-promo.jpg';
import emailIcon from '../../assets/button-icons/email-icon.svg';
import ActionButton from '../common/ActionButton';

const WeeklyDigestSection = () => {
  const emailInputId = useId();

  return (
    <section className="px-8 py-10 sm:px-[4.5rem] sm:pb-20 lg:px-[7.25rem]">
      <div className="flex flex-col gap-[1.875rem] sm:flex-row sm:rounded-[1.25rem] sm:bg-background-secondary sm:px-[1.875rem] sm:py-10 lg:gap-20 lg:p-[3.75rem]">
        <div className="grow sm:contain-size">
          <img src={promoImage} alt="" className="size-full rounded-[1.25rem] object-cover" />
        </div>

        <div className="min-w-0 grow basis-0 xl:py-5">
          <h1 className="mb-2 text-3xl font-semibold leading-10 lg:text-4xl lg:leading-[2.85rem]">
            Join Our Weekly Digest
          </h1>
          <p className="mb-10 text-lg lg:text-2xl lg:leading-9">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <form className="flex flex-col gap-y-4 lg:flex-row">
            <label htmlFor={emailInputId} className="offscreen">
              Enter Your Email Address
            </label>
            <input
              id={emailInputId}
              type="email"
              required
              placeholder="Enter Your Email Address"
              className="py-3 lg:rounded-r-none lg:py-4"
            />

            <div className="sm:rounded-r-[1.25rem] lg:bg-white">
              <ActionButton
                type="submit"
                icon={emailIcon}
                withAccent
                className="w-full *:py-3 lg:*:py-4 xl:*:px-12"
              >
                <span className="lg:hidden xl:inline">Subscribe</span>
              </ActionButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default WeeklyDigestSection;
