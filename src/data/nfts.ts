import { Nft } from '@/types/nft';

export const NFTS: Nft[] = [
  {
    image: '/nfts/distant-galaxy-by-moondancer.jpg',
    title: 'Distant Galaxy',
    creator: {
      name: 'MoonDancer',
      image: '/creators/moondancer.jpg',
      totalSales: 34.53,
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    image: '/nfts/life-on-edena-by-nebulakid.jpg',
    title: 'Life On Edena',
    creator: {
      name: 'NebulaKid',
      image: '/creators/nebulakid.jpg',
      totalSales: 34.53,
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    image: '/nfts/astrofiction-by-spaceone.jpg',
    title: 'AstroFiction',
    creator: {
      name: 'Spaceone',
      image: '/creators/spaceone.jpg',
      totalSales: 34.53,
    },
    price: 1.63,
    highestBid: 0.33,
  },
];

export const HIGHLIGHTED_NFT: Nft = {
  image: '/nfts/space-walking-by-animakid.jpg',
  title: 'Space Walking',
  creator: {
    image: '/creators/animakid.jpg',
    name: 'Animakid',
    totalSales: 34.53,
  },
  price: 1.63,
  highestBid: 0.33,
};

export const AUCTION_NFT: Nft = {
  image: '/nfts/magic-mushrooms-1-by-shroomie.jpg',
  title: 'Magic Mushrooms',
  creator: {
    name: 'Shroomie',
    image: '/creators/shroomie.jpg',
    totalSales: 34.53,
  },
  price: 1.63,
  highestBid: 0.33,
};
