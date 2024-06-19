import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="flex flex-col  bg-black space-y-8 p-6  justify-center ">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <Link href='/'className="hover:text-gray-400 text-white hover:underline" >Home</Link>
        <Link href='/about-us'className="hover:text-gray-400 text-white hover:underline"  >About</Link>
        <Link href='/services'className="hover:text-gray-400 text-white hover:underline" >Services</Link>
        <Link href='/contact-us'className="hover:text-gray-400 text-white hover:underline" >Contact</Link>
      </nav>

      <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="linkedIn" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
        </a>
      </div>
      <p className="text-center text-gray-400 font-medium">&copy; 2024 Farmconnect Ltd. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
