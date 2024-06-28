import { Creator } from '@/types/creator';

export interface Nft {
  image: string;
  title: string;
  creator: Creator;
  price: number;
  highestBid: number;
}
