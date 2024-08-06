import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../img/Logo.png';
import icon from '../img/icon-btn.png';
import message from '../img/message.png';
import wallets from '../img/Wallets.png';
import checklist from '../img/checklist.png';
import statistic from '../img/statistic.png';
import logout from '../img/Logout.png';

const Sidebar: React.FC = () => {
  return (
    <div style={{ background: '#2e47bd' }} className="flex flex-col w-[120px] min-w-[120px] h-screen border-r p-4">
      <div className="mt-[30px] w-[67.88px] h-[67.88px] mx-auto">
        <Link href="/">
          <Image src={logo} alt="Logo Ecommerce" />
        </Link>
      </div>
      <div className="mt-[165px] w-[24px] h-[24px] mx-auto">
        <Link href="/">
          <Image src={icon} alt="Icon" />
        </Link>
      </div>
      <div className="mt-[55px] w-[24px] h-[24px] mx-auto">
        <Link href="/">
          <Image src={message} alt="Message" />
        </Link>
      </div>
      <div className="mt-[55px] w-[24px] h-[24px] mx-auto">
        <Link href="/">
          <Image src={wallets} alt="Wallets" />
        </Link>
      </div>
      <div className="mt-[55px] w-[24px] h-[24px] mx-auto">
        <Link href="/">
          <Image src={checklist} alt="Checklist" />
        </Link>
      </div>
      <div className="mt-[55px] w-[24px] h-[24px] mx-auto">
        <Link href="/">
          <Image src={statistic} alt="Statistic" />
        </Link>
      </div>
      <div className="mt-[260px] w-[18px] h-[26px] mx-auto">
        <Link href="/">
          <Image src={logout} alt="Logout" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
