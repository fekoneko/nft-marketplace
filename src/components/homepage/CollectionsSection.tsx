import { FC } from 'react';
import { CollectionCard } from '@/components/common/CollectionCard';
import { COLLECTIONS } from '@/data/collections';
import { BREAKPOINTS } from '@/lib/use-breakpoint';
import { useBreakpoint } from 'use-breakpoint';

export const CollectionsSection: FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'xs');

  return (
    <section className="px-8 py-10 sm:px-[4.5rem] lg:px-[7.25rem] lg:py-20">
      <h1 className="mb-1.5 text-3xl font-semibold lg:text-4xl">Trending Collection</h1>
      <p className="mb-9 text-lg lg:mb-[3.75rem] lg:text-2xl">
        Checkout Our Weekly Updated Trending Collection
      </p>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {COLLECTIONS.slice(
          0,
          minWidth < BREAKPOINTS.sm ? 1 : minWidth >= BREAKPOINTS.lg ? 3 : 2,
        ).map((collection) => (
          <CollectionCard key={collection.title} collection={collection} />
        ))}
      </div>
    </section>
  );
};
