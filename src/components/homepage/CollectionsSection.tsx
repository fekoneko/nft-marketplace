import { FC } from 'react';
import CollectionCard, { Collection } from '../common/CollectionCard';
import { breakpoints } from '../../lib/use-breakpoint';
import { useBreakpoint } from 'use-breakpoint';

const collections: Collection[] = [
  {
    title: 'DSGN Animals',
    creator: {
      image: '/creators/mrfox.jpg',
      name: 'MrFox',
      totalSales: 34.53,
    },
    previews: [
      '/nfts/dsgn-animals-1-by-mrfox.jpg',
      '/nfts/dsgn-animals-2-by-mrfox.jpg',
      '/nfts/dsgn-animals-3-by-mrfox.jpg',
    ],
    size: 1028,
  },
  {
    title: 'Magic Mushrooms',
    creator: {
      image: '/creators/shroomie.jpg',
      name: 'Shroomie',
      totalSales: 34.53,
    },
    previews: [
      '/nfts/magic-mushrooms-1-by-shroomie.jpg',
      '/nfts/magic-mushrooms-2-by-shroomie.jpg',
      '/nfts/magic-mushrooms-3-by-shroomie.jpg',
    ],
    size: 1028,
  },
  {
    title: 'Disco Machines',
    creator: {
      image: '/creators/bekind2robots.jpg',
      name: 'BeKind2Robots',
      totalSales: 34.53,
    },
    previews: [
      '/nfts/disco-machines-1-by-bekind2robots.jpg',
      '/nfts/disco-machines-2-by-bekind2robots.jpg',
      '/nfts/disco-machines-3-by-bekind2robots.jpg',
    ],
    size: 1028,
  },
];

const CollectionsSection: FC = () => {
  const { minWidth } = useBreakpoint(breakpoints, 'xs');

  return (
    <section className="px-8 py-10 sm:px-[4.5rem] lg:px-[7.25rem] lg:py-20">
      <h1 className="mb-1.5 text-3xl font-semibold lg:text-4xl">Trending Collection</h1>
      <p className="mb-9 text-lg lg:mb-[3.75rem] lg:text-2xl">
        Checkout Our Weekly Updated Trending Collection
      </p>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {collections
          .slice(0, minWidth < breakpoints.sm ? 1 : minWidth >= breakpoints.lg ? 3 : 2)
          .map((collection) => (
            <CollectionCard key={collection.title} collection={collection} />
          ))}
      </div>
    </section>
  );
};
export default CollectionsSection;
