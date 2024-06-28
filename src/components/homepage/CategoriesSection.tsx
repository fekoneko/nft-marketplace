import { FC } from 'react';
import { CategoryCard } from '@/components/common/CategoryCard';
import { CATEGORIES } from '@/data/categories';
import { BREAKPOINTS } from '@/lib/use-breakpoint';
import { useBreakpoint } from 'use-breakpoint';

export const CategoriesSection: FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'xs');

  return (
    <section className="px-8 py-10 sm:px-[4.5rem] lg:px-[7.25rem] lg:py-20">
      <h1 className="mb-9 text-3xl font-semibold lg:mb-[3.75rem] lg:text-4xl">Browse Categories</h1>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.title}
            category={category}
            compact={minWidth < BREAKPOINTS.lg}
          />
        ))}
      </div>
    </section>
  );
};
