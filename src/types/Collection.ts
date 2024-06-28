import { Creator } from '@/types/Creator';

export interface Collection {
  title: string;
  creator: Creator;
  previews: string[];
  size: number;
}
