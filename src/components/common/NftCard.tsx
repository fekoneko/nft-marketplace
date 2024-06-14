import { HTMLAttributes } from 'react';
import { Nft } from '../../@types/globals';
import { twMerge } from 'tailwind-merge';

export interface NftCardProps {
  nft: Nft;
  detailed?: boolean;
}
const NftCard = ({
  nft,
  detailed,
  ...figureAttributes
}: NftCardProps & HTMLAttributes<HTMLElement>) => {
  return (
    <figure
      {...figureAttributes}
      className={twMerge(
        'bg-background-secondary overflow-hidden rounded-[1.25rem]',
        figureAttributes.className,
      )}
    >
      <img src={nft.image} alt={`Image of NFT "${nft.title}"`} />

      <div className={twMerge('flex flex-col p-5 pb-6', detailed ? 'gap-1.5' : 'gap-2.5')}>
        <figcaption className="text-2xl font-semibold">{nft.title}</figcaption>

        <div className="flex gap-2.5">
          <img src={nft.creator.image} alt="" className="w-6 rounded-full" />
          <p className="font-mono text-lg">{nft.creator.name}</p>
        </div>

        {detailed && (
          <div className="mt-4 flex justify-between font-mono">
            <div>
              <p className="text-text-secondary text-sm">Price</p>
              <p>{nft.price} EHT</p>
            </div>
            <div className="text-right">
              <p className="text-text-secondary text-sm">Highest Bid</p>
              <p>{nft.highestBid} wETH</p>
            </div>
          </div>
        )}
      </div>
    </figure>
  );
};
export default NftCard;
