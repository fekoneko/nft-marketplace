import { Creator } from '@/types/creator';

export interface Collection {
  title: string;
  creator: Creator;
  previews: string[];
  size: number;
}
