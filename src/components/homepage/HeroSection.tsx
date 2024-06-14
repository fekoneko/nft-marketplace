import { Nft } from '../../@types/globals';
import ActionButton from '../common/ActionButton';
import NftCard from '../common/NftCard';
import getStartedIcon from '../../assets/get-started-icon.svg';
import Media from 'react-media';

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

const GetStartedButton = () => {
  return (
    <ActionButton icon={getStartedIcon} className="sm:self-start sm:*:px-12">
      Get Started
    </ActionButton>
  );
};

const Stats = () => {
  return (
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
};

const HeroSection = () => {
  return (
    <Media queries={{ medium: '(min-width: 640px)' }}>
      {(matches) => (
        <section className="flex flex-col gap-10 px-8 py-10 sm:flex-row sm:items-start sm:px-[4.5rem] sm:py-20 lg:px-[7.25rem]">
          <div className="flex basis-1/2 flex-col gap-5 lg:gap-8">
            <h1 className="text-3xl font-semibold leading-10 sm:text-4xl lg:-mb-2 lg:text-5xl lg:leading-[3.6rem] xl:text-6xl xl:leading-[4.6rem]">
              Discover Digital Art & Collect NFTs
            </h1>
            <p className="lg:text-2xl">
              NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More
              Than 240k NFT Artists.
            </p>

            {matches.medium && <GetStartedButton />}
            {matches.medium && <Stats />}
          </div>

          <NftCard nft={highlightedNft} className="basis-1/2" />

          {!matches.medium && <GetStartedButton />}
          {!matches.medium && <Stats />}
        </section>
      )}
    </Media>
  );
};
export default HeroSection;
