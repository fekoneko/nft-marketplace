export interface Creator {
  image: string;
  name: string;
  totalSales: number;
}

export interface Nft {
  image: string;
  title: string;
  creator: Creator;
  price: number;
  highestBid: number;
}
