import { FC } from 'react';
import ActionButton from '../common/ActionButton';
import NftCard, { Nft } from '../common/NftCard';
import getStartedIcon from '../../assets/button-icons/get-started-icon.svg';
import { breakpoints } from '../../lib/use-breakpoint';
import { useBreakpoint } from 'use-breakpoint';

const highlightedNft: Nft = {
  image: '/nfts/space-walking-by-animakid.jpg',
  title: 'Space Walking',
  creator: {
    image: '/creators/animakid.jpg',
    name: 'Animakid',
    totalSales: 34.53,
  },
  price: 1.63,
  highestBid: 0.33,
};

const GetStartedButton: FC = () => (
  <ActionButton icon={getStartedIcon} withAccent className="sm:self-start">
    Get Started
  </ActionButton>
);

const Stats: FC = () => (
  <div className="flex justify-between gap-2">
    <div className="min-w-max basis-[5.625rem] lg:basis-[9.375rem]">
      <p className="font-mono text-2xl font-bold lg:text-3xl">240k+</p>
      <p className="lg:text-[1.5rem]">Total Sale</p>
    </div>
    <div className="min-w-max basis-[5.625rem] lg:basis-[9.375rem]">
      <p className="font-mono text-2xl font-bold lg:text-3xl">100k+</p>
      <p className="lg:text-[1.5rem]">Auctions</p>
    </div>
    <div className="min-w-max basis-[5.625rem] lg:basis-[9.375rem]">
      <p className="font-mono text-2xl font-bold lg:text-3xl">240k+</p>
      <p className="lg:text-[1.5rem]">Artists</p>
    </div>
  </div>
);

const WelcomeSection: FC = () => {
  const { minWidth } = useBreakpoint(breakpoints, 'xs');

  return (
    <section className="flex flex-col gap-10 px-8 py-10 sm:flex-row sm:items-start sm:px-[4.5rem] sm:py-20 lg:px-[7.25rem]">
      <div className="flex basis-1/2 flex-col gap-5 lg:gap-8">
        <h1 className="text-3xl font-semibold leading-10 sm:text-4xl lg:-mb-2 lg:text-5xl lg:leading-[3.6rem] xl:text-6xl xl:leading-[4.6rem]">
          Discover Digital Art & Collect NFTs
        </h1>
        <p className="lg:text-2xl">
          NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than
          240k NFT Artists.
        </p>

        {minWidth >= breakpoints.sm && (
          <>
            <GetStartedButton />
            <Stats />
          </>
        )}
      </div>

      <NftCard nft={highlightedNft} className="basis-1/2" />

      {minWidth < breakpoints.sm && (
        <>
          <GetStartedButton />
          <Stats />
        </>
      )}
    </section>
  );
};
export default WelcomeSection;
