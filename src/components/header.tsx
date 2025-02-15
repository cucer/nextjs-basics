'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/posts',
    label: 'Posts',
  },
  {
    href: '/create-post',
    label: 'Create post',
  },
];

export default function Header() {
  // bulunduğumuz route ne ise onu bize söyler, buna göre class vs değiştirebiliriz
  // usePathname client işidir, sayfanın başına use client eklemezsek patlar
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      {/* NextJs içinde kendi Link componenti var */}
      <Link href="/">
        {/* NextJs içinde optimize edilmiş kendi Image componenti var, bunu kullanmalıyız (lazy loading vb)  */}
        <Image
          src="https://cagatayucer.com/cgty_logo.png"
          alt="Logo"
          className="w-[50px] h-[50px]"
          width="50"
          height="50"
        />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              {/* tıklanmış olanları siyah göster */}
              <Link
                className={`${
                  pathname === link.href ? 'text-zinc-900' : 'text-zinc-400'
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
