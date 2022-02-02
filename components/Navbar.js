import React from 'react';
import Image from 'next/image';
import siteLogo from '../public/game-controller.png';

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-center items-center mx-auto">
          <a href="/news/1" className="flex">
            <Image src={siteLogo} alt="Site logo" width={50} height={50} />
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white ml-3">
              VGNews
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
