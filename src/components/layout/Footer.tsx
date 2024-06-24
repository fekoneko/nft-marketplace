import { FC } from 'react';
import logo from '../../assets/logo.svg';
import discordIcon from '../../assets/social-media-icons/discord.svg';
import youtubeIcon from '../../assets/social-media-icons/youtube.svg';
import twitterIcon from '../../assets/social-media-icons/twitter.svg';
import instagramIcon from '../../assets/social-media-icons/instagram.svg';
import WeeklyDigestForm from '../homepage/WeeklyDigestForm';
import { useBreakpoint } from 'use-breakpoint';
import { breakpoints } from '../../lib/use-breakpoint';

interface Link {
  name: string;
  link: string;
}
const expolreLinks: Link[] = [
  { name: 'Marketplace', link: '/' },
  { name: 'Rankings', link: '/' },
  { name: 'Connect a wallet', link: '/' },
];

interface LinkWithIcon extends Link {
  icon: string;
}
const socialMediaLinks: LinkWithIcon[] = [
  { name: 'Discord', link: '/', icon: discordIcon },
  { name: 'YouTube', link: '/', icon: youtubeIcon },
  { name: 'Twitter', link: '/', icon: twitterIcon },
  { name: 'Instagram', link: '/', icon: instagramIcon },
];

const Footer: FC = () => {
  const { minWidth } = useBreakpoint(breakpoints, 'xs');

  return (
    <footer
      role="contentinfo"
      className="bg-background-secondary px-8 py-10 leading-[1.4rem] text-text-footer sm:px-[4.5rem] md:px-[7.25rem]"
    >
      <div className="mb-[1.875rem] flex flex-col justify-between gap-[1.875rem] sm:mb-12 md:mb-[1.875rem] md:flex-row lg:gap-16">
        <section className="flex min-w-56 flex-col gap-5 md:basis-64">
          <a href="/" className="mb-1 flex items-center gap-2">
            <img src={logo} alt="Marketplace Logo" className="-my-4 size-8" />
            <h1 className="whitespace-nowrap font-mono text-xl font-semibold leading-9 text-text">
              NFT Marketplace
            </h1>
          </a>
          <p>NFT marketplace UI created with Anima for Figma.</p>

          <p>Join our community</p>
          <ul className="flex gap-2.5">
            {socialMediaLinks.map((item) => (
              <li key={item.name}>
                <a href={item.link} className="block hover:underline">
                  <img src={item.icon} alt={item.name} className="size-8" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-5 md:basis-40">
          <h1 className="mb-1 font-mono text-xl font-semibold leading-9 text-text">Explore</h1>
          <ul className="flex flex-col gap-5">
            {expolreLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="block whitespace-nowrap transition-colors hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex min-w-0 flex-col gap-5 md:basis-[26.25rem]">
          <h1 className="mb-1 font-mono text-xl font-semibold leading-9 text-text">
            Join Our Weekly Digest
          </h1>
          <p className="lg:max-w-80">Get exclusive promotions & updates straight to your inbox.</p>

          <WeeklyDigestForm
            style={
              minWidth < breakpoints.sm
                ? 'vertical'
                : minWidth >= breakpoints.md
                  ? minWidth >= breakpoints.lg
                    ? 'horizontal-no-icon'
                    : 'horizontal-compact'
                  : 'horizontal-no-icon'
            }
          />
        </section>
      </div>

      <div className="border-t border-text-footer pt-5 text-xs">
        Ⓒ NFT Market. Use this template freely.
      </div>
    </footer>
  );
};
export default Footer;
