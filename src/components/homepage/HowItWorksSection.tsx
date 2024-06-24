import { FC } from 'react';
import howItWorks1Image from '@/assets/how-it-works/how-it-works-1.svg';
import howItWorks2Image from '@/assets/how-it-works/how-it-works-2.svg';
import howItWorks3Image from '@/assets/how-it-works/how-it-works-3.svg';

interface Step {
  headline: string;
  description: string;
  image: string;
}
const steps: Step[] = [
  {
    headline: 'Setup Your Wallet',
    description:
      'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
    image: howItWorks1Image,
  },
  {
    headline: 'Create Collection',
    description:
      'Upload your work and setup your collection. Add a description, social links and floor price.',
    image: howItWorks2Image,
  },
  {
    headline: 'Start Earning',
    description:
      'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    image: howItWorks3Image,
  },
];

interface StepCardProps {
  step: Step;
}

const StepCard: FC<StepCardProps> = ({ step }) => (
  <figure className="flex items-center gap-5 overflow-hidden rounded-[1.25rem] bg-background-secondary p-5 sm:flex-col sm:pb-[1.875rem] sm:pt-2.5 lg:px-[1.875rem]">
    <img src={step.image} alt="" className="aspect-square min-w-0 max-w-[6.25rem] sm:max-w-full" />

    <div className="flex min-w-36 grow basis-20 flex-col gap-2.5 sm:min-w-0">
      <figcaption className="font-semibold sm:text-center lg:text-2xl">{step.headline}</figcaption>
      <p className="text-xs sm:text-center lg:text-base">{step.description}</p>
    </div>
  </figure>
);

const HowItWorksSection: FC = () => (
  <section className="px-8 py-10 sm:px-[4.5rem] lg:px-[7.25rem] lg:py-20">
    <h1 className="mb-1.5 text-3xl font-semibold lg:text-4xl">How It Works</h1>
    <p className="mb-9 text-lg lg:mb-[3.75rem] lg:text-2xl">Find Out How To Get Started</p>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-7">
      {steps.map((step) => (
        <StepCard key={step.headline} step={step} />
      ))}
    </div>
  </section>
);
export default HowItWorksSection;
