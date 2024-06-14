import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div className="flex h-dvh w-screen flex-col overflow-hidden bg-background font-main text-text">
      <Header />
      <div className="no-scrollbar grow overflow-y-scroll">
        <Homepage />
        <Footer />
      </div>
    </div>
  );
};
export default App;
