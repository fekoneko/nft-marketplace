import { FC } from 'react';
import { Creator } from './CreatorCard';

export interface Collection {
  title: string;
  creator: Creator;
  previews: string[];
  size: number;
}

const PreviewPlaceholder: FC = () => (
  <div className="aspect-square rounded-[1.25rem] bg-background-secondary" />
);

export interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard: FC<CollectionCardProps> = ({ collection }) => (
  <figure className="flex flex-col gap-3.5">
    <div className="grid grid-cols-3 gap-3.5 first:*:col-span-3">
      {[collection.previews[0], collection.previews[1], collection.previews[2]].map(
        (preview: string | undefined, index) =>
          preview ? (
            <img
              key={index}
              src={preview}
              alt=""
              className="aspect-square w-full rounded-[1.25rem] object-cover transition-transform duration-300 [:hover>*>&]:first:-translate-y-4 [:hover>*>&]:first:scale-110"
            />
          ) : (
            <PreviewPlaceholder key={index} />
          ),
      )}
      <div className="flex items-center justify-center rounded-[1.25rem] bg-accent font-mono text-2xl">
        <p>{collection.size - 3}+</p>
      </div>
    </div>

    <figcaption className="text-2xl font-semibold">{collection.title}</figcaption>
    <div className="flex gap-2.5">
      <img src={collection.creator.image} alt="" className="w-6 rounded-full" />
      <p className="font-mono text-lg">{collection.creator.name}</p>
    </div>
  </figure>
);
export default CollectionCard;
