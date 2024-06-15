import Media from 'react-media';
import { Collection } from '../../@types/globals';
import CollectionCard from '../common/CollectionCard';

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

const CollectionsSection = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 640px)',
        large: '(min-width: 1024px)',
      }}
    >
      {(matches) => (
        <section className="px-8 py-10 sm:px-[4.5rem] lg:px-[7.25rem] lg:py-20">
          <h1 className="mb-1.5 text-3xl font-semibold lg:text-4xl">Trending Collection</h1>
          <p className="mb-9 text-lg lg:mb-[3.75rem] lg:text-2xl">
            Checkout our weekly updated trending collection.
          </p>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {collections.slice(0, matches.small ? 1 : matches.large ? 3 : 2).map((collection) => (
              <CollectionCard key={collection.title} collection={collection} />
            ))}
          </div>
        </section>
      )}
    </Media>
  );
};
export default CollectionsSection;