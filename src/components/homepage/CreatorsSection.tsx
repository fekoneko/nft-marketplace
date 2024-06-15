import Media from 'react-media';
import { Creator } from '../../@types/globals';
import CreatorCard from '../common/CreatorCard';
import ActionButton from '../common/ActionButton';
import getStartedIcon from '../../assets/button-icons/get-started-icon.svg';

const creators: Creator[] = [
  {
    name: 'Keepitreal',
    image: '/creators/keepitreal.jpg',
    totalSales: 34.53,
  },
  {
    name: 'DigiLab',
    image: '/creators/digilab.jpg',
    totalSales: 34.53,
  },
  {
    name: 'GravityOne',
    image: '/creators/gravityone.jpg',
    totalSales: 34.53,
  },
  {
    name: 'Juanie',
    image: '/creators/juanie.jpg',
    totalSales: 34.53,
  },
  {
    name: 'BlueWhale',
    image: '/creators/bluewhale.jpg',
    totalSales: 34.53,
  },
  {
    name: 'MrFox',
    image: '/creators/mrfox.jpg',
    totalSales: 34.53,
  },
  {
    name: 'Shroomie',
    image: '/creators/shroomie.jpg',
    totalSales: 34.53,
  },
  {
    name: 'Robotica',
    image: '/creators/robotica.jpg',
    totalSales: 34.53,
  },
  {
    name: 'RustyRobot',
    image: '/creators/rustyrobot.jpg',
    totalSales: 34.53,
  },
  {
    name: 'Animakid',
    image: '/creators/animakid.jpg',
    totalSales: 34.53,
  },
  {
    name: 'Dotgu',
    image: '/creators/dotgu.jpg',
    totalSales: 34.53,
  },
  {
    name: 'Ghiblier',
    image: '/creators/ghiblier.jpg',
    totalSales: 34.53,
  },
];

const ViewRankingsButton = () => {
  return (
    <ActionButton
      icon={getStartedIcon}
      className="mt-10 w-full whitespace-nowrap *:px-12 sm:mt-0 sm:w-auto"
    >
      View Rankings
    </ActionButton>
  );
};

const CreatorsSection = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 640px)',
        large: '(min-width: 1024px)',
        extraLarge: '(min-width: 1130px)',
      }}
    >
      {(matches) => (
        <section className="px-8 py-10 sm:px-[4.5rem] lg:px-[7.25rem] lg:py-20">
          <div className="mb-9 flex items-end justify-between gap-24 lg:mb-[3.75rem]">
            <div>
              <h1 className="mb-1.5 text-3xl font-semibold lg:text-4xl">Top Creators</h1>
              <p className="text-lg lg:text-2xl">
                Checkout Top Rated Creators On The NFT Marketplace
              </p>
            </div>
            {!matches.small && <ViewRankingsButton />}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
            {creators
              .slice(0, matches.small ? 5 : matches.extraLarge ? 12 : matches.large ? 9 : 6)
              .map((creator, index) => (
                <CreatorCard
                  key={creator.name}
                  creator={creator}
                  topRank={index + 1}
                  compact={!matches.large}
                />
              ))}
          </div>

          {matches.small && <ViewRankingsButton />}
        </section>
      )}
    </Media>
  );
};
export default CreatorsSection;
