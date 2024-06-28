import { FC } from 'react';
import { ActionButton } from '@/components/common/ActionButton';
import seeAllIcon from '@/assets/button-icons/see-all-icon.svg';
import { AUCTION_NFT } from '@/data/nfts';
import { Countdown } from '@/components/common/Countdown';
import { useBreakpoint } from 'use-breakpoint';
import { BREAKPOINTS } from '@/lib/use-breakpoint';

const SeeNftButton: FC = () => (
  <ActionButton icon={seeAllIcon} withAccent light>
    See NFT
  </ActionButton>
);

export const AuctionSection: FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'xs');

  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url("${AUCTION_NFT.image}")` }}
    >
      <div className="flex h-[36.875rem] flex-col justify-end gap-[1.875rem] bg-gradient-to-t from-accent px-8 py-10 sm:h-[39.375rem] sm:flex-row sm:items-end sm:justify-between sm:px-[4.5rem] sm:py-[3.75rem] lg:h-[40rem] lg:px-[7.25rem]">
        <div className="flex flex-col items-start gap-[1.875rem]">
          <div className="flex gap-2.5 rounded-full bg-background-secondary px-5 py-2.5">
            <img src={AUCTION_NFT.creator.image} alt="" className="w-6 rounded-full" />
            <p className="font-mono text-lg">{AUCTION_NFT.creator.name}</p>
          </div>

          <h1 className="text-4xl font-semibold leading-[2.85rem] lg:text-[3.1875rem] lg:leading-[3.5rem]">
            {AUCTION_NFT.title}
          </h1>
          {minWidth >= BREAKPOINTS.sm && <SeeNftButton />}
        </div>

        <Countdown caption="Auction ends in" />
        {minWidth < BREAKPOINTS.sm && <SeeNftButton />}
      </div>
    </section>
  );
};
