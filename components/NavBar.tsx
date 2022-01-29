/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import ThemeSwitcher from './ThemeSwitcher';

const NavBar: FC = () => {
  const router = useRouter();

  const isActive = (href: string) =>
    router.pathname === href ? 'border-b-2' : '';

  return (
    <nav className="navbar">
      <div className="p-6 max-w-screen-xl mx-auto flex items-center justify-between md:text-lg uppercase">
        <div className="">
          <Link href="/">
            <a className={`mx-2 md:mx-4 py-1 ${isActive('/')}`}>Home</a>
          </Link>
          <Link href="/blog">
            <a className={`mx-2 md:mx-4 py-1 ${isActive('/blog')}`}>Blog</a>
          </Link>
          <Link href="/ama">
            <a className={`mx-2 md:mx-4 py-1 ${isActive('/ama')}`}>AMA</a>
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
