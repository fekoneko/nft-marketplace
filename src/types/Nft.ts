import { Creator } from '@/types/Creator';

export interface Nft {
  image: string;
  title: string;
  creator: Creator;
  price: number;
  highestBid: number;
}
