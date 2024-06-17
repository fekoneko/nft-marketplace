import { HTMLAttributes } from 'react';
import { Creator } from '../../@types/globals';
import { twMerge } from 'tailwind-merge';

export interface CreatorCardProps {
  creator: Creator;
  topRank?: number;
  compact?: boolean;
}
const CreatorCard = ({
  creator,
  topRank,
  compact,
  ...figureAttributes
}: CreatorCardProps & HTMLAttributes<HTMLElement>) => {
  return (
    <figure
      {...figureAttributes}
      className={twMerge(
        'hover:bg-background-secondary-hover relative flex items-center gap-5 overflow-hidden rounded-[1.25rem] bg-background-secondary p-5 transition-all duration-300 hover:-translate-y-2',
        !compact && 'flex-col',
        figureAttributes.className,
      )}
    >
      {topRank !== undefined && (
        <p
          className={twMerge(
            'absolute flex h-[1.875rem] min-w-[1.875rem] items-center justify-center rounded-full bg-background px-1 font-mono text-text-secondary',
            compact ? 'left-3 top-3' : 'left-5 top-5',
          )}
        >
          {topRank}
        </p>
      )}

      <img
        src={creator.image}
        alt={`Avatar of ${creator.name}`}
        className={twMerge(
          'rounded-full object-cover',
          compact ? 'size-[3.75rem]' : 'size-[7.5rem]',
        )}
      />

      <div className={twMerge('flex flex-col gap-1.5', !compact && 'items-center')}>
        <figcaption className="text-2xl font-semibold">{creator.name}</figcaption>

        <div
          className={twMerge(
            'flex flex-wrap gap-x-2 font-mono text-sm',
            !compact && 'justify-center',
          )}
        >
          <p className="text-text-secondary">Total Sales:</p>
          <p className="">{creator.totalSales} EHT</p>
        </div>
      </div>
    </figure>
  );
};
export default CreatorCard;
