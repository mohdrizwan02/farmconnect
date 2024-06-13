import React from 'react';

const LoginSignupheader= () => {
  return (
    <nav className="hidden md:flex items-center justify-end mr-3 space-x-6">
      <a href="/login" className="text-black hover:text-gray-700 hover:underline text-xl font-bold">Login</a>
      <a href="/register" className="text-black hover:text-gray-700 hover:underline text-xl font-bold">Sign Up</a>
    </nav>
  );
}

export default LoginSignupheader;
