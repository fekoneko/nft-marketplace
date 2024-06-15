import WelcomeSection from '../components/homepage/WelcomeSection';
import CollectionsSection from '../components/homepage/CollectionsSection';
import CreatorsSection from '../components/homepage/CreatorsSection';
import CategoriesSection from '../components/homepage/CategoriesSection';
import NftsSection from '../components/homepage/NftsSection';
import AuctionSection from '../components/homepage/AuctionSection';

const Homepage = () => {
  return (
    <main role="main">
      <WelcomeSection />
      <CollectionsSection />
      <CreatorsSection />
      <CategoriesSection />
      <NftsSection />
      <AuctionSection />
    </main>
  );
};
export default Homepage;
