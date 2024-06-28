import { FC } from 'react';
import { CreatorCard } from '@/components/common/CreatorCard';
import { CREATORS } from '@/data/creators';
import { ActionButton } from '@/components/common/ActionButton';
import getStartedIcon from '@/assets/button-icons/get-started-icon.svg';
import { useBreakpoint } from 'use-breakpoint';
import { BREAKPOINTS } from '@/lib/use-breakpoint';

const ViewRankingsButton: FC = () => (
  <ActionButton icon={getStartedIcon} className="mt-10 w-full whitespace-nowrap sm:mt-0 sm:w-auto">
    View Rankings
  </ActionButton>
);

export const CreatorsSection: FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'xs');

  return (
    <section className="px-8 py-10 sm:px-[4.5rem] lg:px-[7.25rem] lg:py-20">
      <div className="mb-9 flex items-end justify-between gap-24 lg:mb-[3.75rem]">
        <div>
          <h1 className="mb-1.5 text-3xl font-semibold lg:text-4xl">Top Creators</h1>
          <p className="text-lg lg:text-2xl">Checkout Top Rated Creators On The NFT Marketplace</p>
        </div>
        {minWidth >= BREAKPOINTS.sm && <ViewRankingsButton />}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
        {CREATORS.slice(
          0,
          minWidth < BREAKPOINTS.sm
            ? 5
            : minWidth >= BREAKPOINTS.xl
              ? 12
              : minWidth >= BREAKPOINTS.lg
                ? 9
                : 6,
        ).map((creator, index) => (
          <CreatorCard
            key={creator.name}
            creator={creator}
            topRank={index + 1}
            compact={minWidth < BREAKPOINTS.lg}
          />
        ))}
      </div>

      {minWidth < BREAKPOINTS.sm && <ViewRankingsButton />}
    </section>
  );
};
