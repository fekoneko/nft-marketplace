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

export interface Collection {
  title: string;
  creator: Creator;
  previews: string[];
  size: number;
}

export interface Category {
  icon: string;
  title: string;
  preview: string;
}
