import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div className="font-main bg-background text-text flex h-dvh w-screen flex-col">
      <Header />
      <div className="grow">
        <Homepage />
        <Footer />
      </div>
    </div>
  );
};
export default App;
