import ActionButton from '../common/ActionButton';
import seeAllIcon from '../../assets/button-icons/see-all-icon.svg';
import { Nft } from '../common/NftCard';
import Countdown from '../common/Countdown';
import { useBreakpoint } from 'use-breakpoint';
import { breakpoints } from '../../lib/use-breakpoint';

const auctionNft: Nft = {
  image: '/nfts/magic-mushrooms-1-by-shroomie.jpg',
  title: 'Magic Mushrooms',
  creator: {
    name: 'Shroomie',
    image: '/creators/shroomie.jpg',
    totalSales: 34.53,
  },
  price: 1.63,
  highestBid: 0.33,
};

const SeeNftButton = () => {
  return (
    <ActionButton icon={seeAllIcon} withAccent light>
      See NFT
    </ActionButton>
  );
};

const AuctionSection = () => {
  const { minWidth } = useBreakpoint(breakpoints, 'xs');

  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url("${auctionNft.image}")` }}
    >
      <div className="flex h-[36.875rem] flex-col justify-end gap-[1.875rem] bg-gradient-to-t from-accent px-8 py-10 sm:h-[39.375rem] sm:flex-row sm:items-end sm:justify-between sm:px-[4.5rem] sm:py-[3.75rem] lg:h-[40rem] lg:px-[7.25rem]">
        <div className="flex flex-col items-start gap-[1.875rem]">
          <div className="flex gap-2.5 rounded-full bg-background-secondary px-5 py-2.5">
            <img src={auctionNft.creator.image} alt="" className="w-6 rounded-full" />
            <p className="font-mono text-lg">{auctionNft.creator.name}</p>
          </div>

          <h1 className="text-4xl font-semibold leading-[2.85rem] lg:text-[3.1875rem] lg:leading-[3.5rem]">
            {auctionNft.title}
          </h1>
          {minWidth >= breakpoints.sm && <SeeNftButton />}
        </div>

        <Countdown initialTime={215999} caption="Auction ends in" />
        {minWidth < breakpoints.sm && <SeeNftButton />}
      </div>
    </section>
  );
};
export default AuctionSection;
