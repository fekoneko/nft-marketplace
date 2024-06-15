import Media from 'react-media';
import ActionButton from '../common/ActionButton';
import seeAllIcon from '../../assets/button-icons/see-all-icon.svg';
import { Nft } from '../../@types/globals';
import NftCard from '../common/NftCard';

const nfts: Nft[] = [
  {
    image: '/nfts/distant-galaxy-by-moondancer.jpg',
    title: 'Distant Galaxy',
    creator: {
      name: 'MoonDancer',
      image: '/creators/moondancer.jpg',
      totalSales: 34.53,
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    image: '/nfts/life-on-edena-by-nebulakid.jpg',
    title: 'Life On Edena',
    creator: {
      name: 'NebulaKid',
      image: '/creators/nebulakid.jpg',
      totalSales: 34.53,
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    image: '/nfts/astrofiction-by-spaceone.jpg',
    title: 'AstroFiction',
    creator: {
      name: 'Spaceone',
      image: '/creators/spaceone.jpg',
      totalSales: 34.53,
    },
    price: 1.63,
    highestBid: 0.33,
  },
];

const SeeAllButton = () => {
  return (
    <ActionButton
      icon={seeAllIcon}
      className="mt-10 w-full whitespace-nowrap *:px-12 sm:mt-0 sm:w-auto"
    >
      See All
    </ActionButton>
  );
};

const NftsSection = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 640px)',
        large: '(min-width: 1024px)',
      }}
    >
      {(matches) => (
        <section className="px-8 py-10 sm:px-[4.5rem] sm:pb-20 lg:px-[7.25rem] lg:py-20">
          <div className="mb-9 flex items-end justify-between gap-24 lg:mb-[3.75rem]">
            <div>
              <h1 className="mb-1.5 text-3xl font-semibold lg:text-4xl">Discover More NFTs</h1>
              <p className="text-lg lg:text-2xl">Explore new trending NFTs</p>
            </div>
            {!matches.small && <SeeAllButton />}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
            {nfts.slice(0, matches.small || matches.large ? 3 : 2).map((nft) => (
              <NftCard key={nft.title} nft={nft} detailed />
            ))}
          </div>

          {matches.small && <SeeAllButton />}
        </section>
      )}
    </Media>
  );
};
export default NftsSection;
