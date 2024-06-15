import WelcomeSection from '../components/homepage/WelcomeSection';
import CollectionsSection from '../components/homepage/CollectionsSection';
import CreatorsSection from '../components/homepage/CreatorsSection';

const Homepage = () => {
  return (
    <main role="main">
      <WelcomeSection />
      <CollectionsSection />
      <CreatorsSection />
    </main>
  );
};
export default Homepage;
