import logo from '../../assets/logo.svg';
import hamburgerMenuIcon from '../../assets/hamburger-menu.svg';
import userIcon from '../../assets/user-icon.svg';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Media from 'react-media';
import ActionButton from '../common/ActionButton';

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
          'bg-background absolute flex w-full flex-col transition-transform duration-500',
          isOpen ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        {menuItems.map((item) => (
          <li key={item.name} className="px-8 py-1 text-center transition-colors hover:bg-white/10">
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Media queries={{ large: '(min-width: 1024px)' }}>
      {(matches) => (
        <>
          <div className="bg-background z-10 flex items-center justify-between px-8 py-4 font-semibold sm:px-12 lg:py-5">
            <a href="/" role="banner" className="flex gap-2">
              <img src={logo} alt="Marketplace Logo" className="size-6 lg:size-8" />
              <h1 className="font-mono lg:text-2xl">NFT Marketplace</h1>
            </a>

            {matches.large && (
              <div className="flex items-center gap-2">
                <Nav />
                <ActionButton icon={userIcon}>Sign Up</ActionButton>
              </div>
            )}

            {!matches.large && (
              <button onClick={() => setIsOpen((prev) => !prev)}>
                <img src={hamburgerMenuIcon} alt="Menu" />
              </button>
            )}
          </div>

          {!matches.large && <Menu isOpen={isOpen} />}
        </>
      )}
    </Media>
  );
};
export default Header;
