import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black space-y-8 p-6  justify-center ">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a className="hover:text-gray-400 text-white hover:underline" href="./">Home</a>
        <a className="hover:text-gray-400 text-white hover:underline"  href="/about-us">About</a>
        <a className="hover:text-gray-400 text-white hover:underline" href="#">Services</a>
        <a className="hover:text-gray-400 text-white hover:underline" href="./contact-us">Contact</a>
      </nav>

      <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
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
