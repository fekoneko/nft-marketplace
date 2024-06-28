import logo from '@//assets/logo.svg';
import hamburgerMenuIcon from '@//assets/button-icons/hamburger-menu-icon.svg';
import userIcon from '@//assets/button-icons/user-icon.svg';
import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ActionButton } from '@/components/common/ActionButton';
import { Icon } from '@/components/common/Icon';
import { useBreakpoint } from 'use-breakpoint';
import { BREAKPOINTS } from '@/lib/use-breakpoint';

interface Link {
  name: string;
  link: string;
}
const navLinks: Link[] = [
  { name: 'Marketplace', link: '/' },
  { name: 'Rankings', link: '/' },
  { name: 'Connect a wallet', link: '/' },
];
const menuLinks: Link[] = [...navLinks, { name: 'Sign up', link: '/' }];

interface MenuProps {
  isOpen?: boolean;
}

const Menu: FC<MenuProps> = ({ isOpen }) => (
  <nav role="navigation" className="relative">
    <ul
      className={twMerge(
        'absolute z-40 flex w-full flex-col bg-background pb-2 shadow-xl transition-transform duration-500',
        isOpen ? 'translate-y-0' : 'translate-y-[-120%]',
      )}
    >
      {menuLinks.map((item) => (
        <li key={item.name} className="px-8 py-2.5 text-center transition-colors hover:bg-white/10">
          <a href={item.link} className="block">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const Nav: FC = () => (
  <nav role="navigation">
    <ul className="flex size-full">
      {navLinks.map((item) => (
        <li key={item.name}>
          <a
            href={item.link}
            className="flex h-full items-center px-5 transition-all duration-200 hover:-translate-y-1 hover:text-accent"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export const Header: FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'xs');
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <>
      <header className="z-50 flex items-center justify-between bg-background px-8 py-4 font-semibold shadow-transparent transition-shadow sm:px-12 lg:py-5">
        <a href="/" role="banner" className="flex gap-2">
          <img src={logo} alt="Marketplace Logo" className="size-6 lg:size-8" />
          <h1 className="font-mono lg:text-2xl">NFT Marketplace</h1>
        </a>

        {minWidth >= BREAKPOINTS.lg && (
          <div className="flex gap-2">
            <Nav />
            <ActionButton icon={userIcon} withAccent className="px-8">
              Sign Up
            </ActionButton>
          </div>
        )}

        {minWidth < BREAKPOINTS.lg && (
          <button onClick={() => setIsMenuOpened((prev) => !prev)}>
            <Icon src={hamburgerMenuIcon} className="size-6 bg-white" aria-label="Menu" />
          </button>
        )}
      </header>

      {minWidth < BREAKPOINTS.lg && <Menu isOpen={isMenuOpened} />}
    </>
  );
};
