import { FC } from 'react';
import CreatorCard, { Creator } from '@/components/common/CreatorCard';
import ActionButton from '@/components/common/ActionButton';
import getStartedIcon from '@/assets/button-icons/get-started-icon.svg';
import { useBreakpoint } from 'use-breakpoint';
import { breakpoints } from '@/lib/use-breakpoint';

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

const ViewRankingsButton: FC = () => (
  <ActionButton icon={getStartedIcon} className="mt-10 w-full whitespace-nowrap sm:mt-0 sm:w-auto">
    View Rankings
  </ActionButton>
);

const CreatorsSection: FC = () => {
  const { minWidth } = useBreakpoint(breakpoints, 'xs');

  return (
    <section className="px-8 py-10 sm:px-[4.5rem] lg:px-[7.25rem] lg:py-20">
      <div className="mb-9 flex items-end justify-between gap-24 lg:mb-[3.75rem]">
        <div>
          <h1 className="mb-1.5 text-3xl font-semibold lg:text-4xl">Top Creators</h1>
          <p className="text-lg lg:text-2xl">Checkout Top Rated Creators On The NFT Marketplace</p>
        </div>
        {minWidth >= breakpoints.sm && <ViewRankingsButton />}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
        {creators
          .slice(
            0,
            minWidth < breakpoints.sm
              ? 5
              : minWidth >= breakpoints.xl
                ? 12
                : minWidth >= breakpoints.lg
                  ? 9
                  : 6,
          )
          .map((creator, index) => (
            <CreatorCard
              key={creator.name}
              creator={creator}
              topRank={index + 1}
              compact={minWidth < breakpoints.lg}
            />
          ))}
      </div>

      {minWidth < breakpoints.sm && <ViewRankingsButton />}
    </section>
  );
};
export default CreatorsSection;
