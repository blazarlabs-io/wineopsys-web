import React from 'react';
import Link from 'next/link';

const menuItems = [
  { title: 'Home', href: '/#home' },
  { title: 'Features', href: '/#features' },
  { title: 'How it works', href: '/#how-it-works' },
  { title: 'Who Uses WineOpSys', href: '/#who-uses' },
  { title: 'Team / Contact', href: '/#contact' },
];

export type FooterProps = {
  marginTop?: string;
};

function cn(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

export default function Footer( {marginTop = 'mt-[120px]'} : FooterProps) {
  return (
    <footer className={cn("w-full px-6 lg:px-0 lg:max-w-[1024px] mx-auto bg-[#66243E] py-[80px]", marginTop )}>
      {/* logo + divider */}
      <div className="flex w-full items-end justify-center gap-[37px] lg:justify-start">
        <img
          src="/logo-footer.svg"
          alt="Logo"
          className="w-[120px] h-[80px]"
        />
        <div className="flex-grow h-[1px] bg-[#CBA2A6]" />
      </div>

      {/* menu anchors */}
      <nav className="flex flex-col gap-4 mt-[60px] lg:flex-row lg:justify-between lg:items-start lg:px-[50px]">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-start h-[45px] border-l border-[#CBA2A6] pl-4 font-medium text-[24px] lg:leading-[23px] text-white lg:max-w-[150px]"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* bottom social / legal */}
      <div className="mt-[90px] flex flex-col gap-[42px] items-center lg:flex-row lg:justify-center lg:items-stretch">
        <div>
          <div className='text-[#CBA2A6] text-[22px] leading-[20px]'>Follow us:</div>
          <div className='mt-[25px] flex gap-[20px]'>
            <img src='/footer/telegram-social.svg' className='h-[50px]' />
            <img src='/footer/facebook-social.svg' className='h-[50px]' />
            <img src='/footer/telegram-social.svg' className='h-[50px]' />
          </div>
        </div>
        <div>
          <div className='text-[#CBA2A6] text-[22px] leading-[20px]'>Our Partners:</div>
          <div className='mt-[25px]'>
            <img src='/footer/cardano.svg' className='h-[50px]' />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:justify-end">
          <div className="text-white">
            © {new Date().getFullYear()} WineOpSys. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center lg:justify-between gap-x-4 lg:gap-x-0.5 w-full max-w-md text-[#CBA2A6] mt-2">
        
            <Link href="/legal">Legal</Link>
            <span className="text-white">|</span>
            <Link href="/privacy">Privacy Policy</Link>
            <span className="text-white">|</span>
            <Link href="/terms">Terms of Use</Link>
            <span className="text-white">|</span>
            <Link href="/terms">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
