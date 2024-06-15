import logo from '../../assets/logo.svg';
import hamburgerMenuIcon from '../../assets/button-icons/hamburger-menu-icon.svg';
import userIcon from '../../assets/button-icons/user-icon.svg';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Media from 'react-media';
import ActionButton from '../common/ActionButton';
import Icon from '../common/Icon';

interface Item {
  name: string;
  link: string;
}
const navItems: Item[] = [
  { name: 'Marketplace', link: '/' },
  { name: 'Rankings', link: '/' },
  { name: 'Connect a wallet', link: '/' },
];
const menuItems: Item[] = [...navItems, { name: 'Sign up', link: '/' }];

interface MenuProps {
  isOpen?: boolean;
}
const Menu = ({ isOpen }: MenuProps) => {
  return (
    <nav role="navigation" className="relative">
      <ul
        className={twMerge(
          'absolute flex w-full flex-col bg-background pb-2 shadow-xl transition-transform duration-500',
          isOpen ? 'translate-y-0' : 'translate-y-[-120%]',
        )}
      >
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="px-8 py-2.5 text-center transition-colors hover:bg-white/10"
          >
            <a href={item.link} className="block">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Nav = () => {
  return (
    <nav role="navigation">
      <ul className="flex">
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.link} className="block px-5 hover:underline">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <Media queries={{ large: '(min-width: 1024px)' }}>
      {(matches) => (
        <>
          <header className="z-10 flex items-center justify-between bg-background px-8 py-4 font-semibold shadow-transparent transition-shadow sm:px-12 lg:py-5">
            <a href="/" role="banner" className="flex gap-2">
              <img src={logo} alt="Marketplace Logo" className="size-6 lg:size-8" />
              <h1 className="font-mono lg:text-2xl">NFT Marketplace</h1>
            </a>

            {matches.large && (
              <div className="flex items-center gap-2">
                <Nav />
                <ActionButton icon={userIcon} withAccent>
                  Sign Up
                </ActionButton>
              </div>
            )}

            {!matches.large && (
              <button onClick={() => setIsMenuOpened((prev) => !prev)}>
                <Icon src={hamburgerMenuIcon} className="size-6 bg-white" aria-label="Menu" />
              </button>
            )}
          </header>

          {!matches.large && <Menu isOpen={isMenuOpened} />}
        </>
      )}
    </Media>
  );
};
export default Header;
