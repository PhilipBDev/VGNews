import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-black-600 text-center lg:text-left">
        <div className="text-white text-center p-4">
          © 2022{' '}
          <a
            className="hover:text-green-600 font-bold"
            href="https://github.com/PhilipBDev"
          >
            PhilipBDev
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
