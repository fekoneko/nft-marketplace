import { Category } from '@/types/Category';
import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface NftCardProps {
  category: Category;
  compact?: boolean;
}

export const CategoryCard: FC<NftCardProps & HTMLAttributes<HTMLElement>> = ({
  category,
  compact,
  ...figureAttributes
}) => (
  <figure
    {...figureAttributes}
    className={twMerge(
      'overflow-hidden rounded-[1.25rem] bg-background-secondary transition-all duration-300 hover:-translate-y-2 hover:bg-background-secondary-hover',
      figureAttributes.className,
    )}
  >
    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden">
      <img
        src={category.preview}
        alt=""
        className="svg-blur absolute left-0 top-0 size-full object-cover"
      />
      <div className="absolute left-0 top-0 size-full bg-white/10" />
      <img src={category.icon} alt="" className="z-10 size-[6.25rem]" />
    </div>

    <figcaption
      className={twMerge('mx-[1.875rem] mb-6 mt-5 font-semibold', !compact && 'text-2xl')}
    >
      {category.title}
    </figcaption>
  </figure>
);
