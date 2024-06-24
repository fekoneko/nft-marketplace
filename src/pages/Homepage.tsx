import { FC } from 'react';
import { WelcomeSection } from '@/components/homepage/WelcomeSection';
import { CollectionsSection } from '@/components/homepage/CollectionsSection';
import { CreatorsSection } from '@/components/homepage/CreatorsSection';
import { CategoriesSection } from '@/components/homepage/CategoriesSection';
import { NftsSection } from '@/components/homepage/NftsSection';
import { AuctionSection } from '@/components/homepage/AuctionSection';
import { HowItWorksSection } from '@/components/homepage/HowItWorksSection';
import { WeeklyDigestSection } from '@/components/homepage/WeeklyDigestSection';

export const Homepage: FC = () => (
  <main role="main">
    <WelcomeSection />
    <CollectionsSection />
    <CreatorsSection />
    <CategoriesSection />
    <NftsSection />
    <AuctionSection />
    <HowItWorksSection />
    <WeeklyDigestSection />
  </main>
);
