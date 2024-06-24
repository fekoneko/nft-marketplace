import { FC } from 'react';
import CategoryCard, { Category } from '@/components/common/CategoryCard';
import { breakpoints } from '@/lib/use-breakpoint';
import { useBreakpoint } from 'use-breakpoint';

const categories: Category[] = [
  {
    title: 'Art',
    icon: '/categories/icons/art.svg',
    preview: '/categories/previews/art.jpg',
  },
  {
    title: 'Collectibles',
    icon: '/categories/icons/collectibles.svg',
    preview: '/categories/previews/collectibles.jpg',
  },
  {
    title: 'Music',
    icon: '/categories/icons/music.svg',
    preview: '/categories/previews/music.jpg',
  },
  {
    title: 'Photography',
    icon: '/categories/icons/photography.svg',
    preview: '/categories/previews/photography.jpg',
  },
  {
    title: 'Video',
    icon: '/categories/icons/video.svg',
    preview: '/categories/previews/video.jpg',
  },
  {
    title: 'Utility',
    icon: '/categories/icons/utility.svg',
    preview: '/categories/previews/utility.jpg',
  },
  {
    title: 'Sport',
    icon: '/categories/icons/sport.svg',
    preview: '/categories/previews/sport.jpg',
  },
  {
    title: 'Virtual Worlds',
    icon: '/categories/icons/virtual-worlds.svg',
    preview: '/categories/previews/virtual-worlds.jpg',
  },
];

const CategoriesSection: FC = () => {
  const { minWidth } = useBreakpoint(breakpoints, 'xs');

  return (
    <section className="px-8 py-10 sm:px-[4.5rem] lg:px-[7.25rem] lg:py-20">
      <h1 className="mb-9 text-3xl font-semibold lg:mb-[3.75rem] lg:text-4xl">Browse Categories</h1>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            category={category}
            compact={minWidth < breakpoints.lg}
          />
        ))}
      </div>
    </section>
  );
};
export default CategoriesSection;
