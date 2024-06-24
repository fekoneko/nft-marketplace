import { FC, HTMLAttributes } from 'react';
import { Creator } from '@/components/common/CreatorCard';
import { twMerge } from 'tailwind-merge';

export interface Nft {
  image: string;
  title: string;
  creator: Creator;
  price: number;
  highestBid: number;
}

export interface NftCardProps {
  nft: Nft;
  detailed?: boolean;
}

export const NftCard: FC<NftCardProps & HTMLAttributes<HTMLElement>> = ({
  nft,
  detailed,
  ...figureAttributes
}) => (
  <figure
    {...figureAttributes}
    className={twMerge(
      'overflow-hidden rounded-[1.25rem] bg-background-secondary transition-all duration-300 hover:-translate-y-2 hover:bg-background-secondary-hover',
      figureAttributes.className,
    )}
  >
    <img
      src={nft.image}
      alt={`Image of NFT "${nft.title}"`}
      className={twMerge('w-full object-cover', detailed ? 'aspect-[11/10]' : 'aspect-[5/4]')}
    />

    <div className={twMerge('flex flex-col p-5 pb-6', detailed ? 'gap-1.5' : 'gap-2.5')}>
      <figcaption className="text-2xl font-semibold">{nft.title}</figcaption>

      <div className="flex gap-2.5">
        <img src={nft.creator.image} alt="" className="w-6 rounded-full" />
        <p className="font-mono text-lg">{nft.creator.name}</p>
      </div>

      {detailed && (
        <div className="mt-4 flex justify-between font-mono">
          <div>
            <p className="text-sm text-text-secondary">Price</p>
            <p>{nft.price} EHT</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-text-secondary">Highest Bid</p>
            <p>{nft.highestBid} wETH</p>
          </div>
        </div>
      )}
    </div>
  </figure>
);
