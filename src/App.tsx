import { FC } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { HomePage } from '@/pages/HomePage';

export const App: FC = () => (
  <div className="flex h-dvh min-h-[250px] w-screen min-w-[300px] max-w-[1600px] flex-col overflow-hidden font-main text-text">
    <Header />
    <div className="no-scrollbar grow overflow-y-scroll">
      <HomePage />
      <Footer />
    </div>
  </div>
);
