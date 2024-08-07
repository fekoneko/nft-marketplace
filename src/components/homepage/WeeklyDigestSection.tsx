import { FC } from 'react';
import { useBreakpoint } from 'use-breakpoint';
import promoImage from '@/assets/weekly-digest-promo.jpg';
import { WeeklyDigestForm } from '@/components/homepage/WeeklyDigestForm';
import { BREAKPOINTS } from '@/lib/use-breakpoint';

export const WeeklyDigestSection: FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'xs');

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

          <WeeklyDigestForm
            orientation={
              minWidth >= BREAKPOINTS.xl
                ? 'horizontal'
                : minWidth >= BREAKPOINTS.lg
                  ? 'horizontal-compact'
                  : 'vertical'
            }
          />
        </div>
      </div>
    </section>
  );
};
