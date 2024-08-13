'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/logo-club.jpg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { RiAccountCircleFill } from 'react-icons/ri';
import { TfiAgenda } from 'react-icons/tfi';

// const ulMobile = () => {
//   return (
//     <ul className="bg-red-500">
//       <li>Cuenta</li>
//       <li>Reservas</li>
//     </ul>
//   );
// };

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toogle = () => {
    setOpen(!open);
  };

  return (
    <div className={` ${open ? '' : 'shadow-md'} mb-5`}>
      <div className=" flex justify-between items-center py-5 px-4  mb-5">
        <Link href={'/'}>
          <Image
            src={logo}
            width={45}
            height={100}
            alt="logo"
            className="rounded-full"
          />
        </Link>
        <RxHamburgerMenu onClick={() => toogle()} size={35} />
      </div>

      {open ? (
        <ul className="px-4 grid grid-cols-1 pb-4 divide-y">
          <div className="flex justify-between text-md py-3 ">
            <span>Account</span> <RiAccountCircleFill size={25} />
          </div>
          <div className="flex justify-between text-md py-3">
            <span>Reservas</span> <TfiAgenda size={25} />
          </div>
          <div className="flex justify-between text-md py-3">
            <span>Reservas</span> <TfiAgenda size={25} />
          </div>
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default Navbar;
