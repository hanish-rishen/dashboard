// components/Navbar.tsx
import React from 'react';

export const MainNav: React.FC = () => {
  return (
    <nav className="w-full bg-gray-800 text-white p-4 fixed top-0 z-10"> {/* Navbar styling */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">My App</div>
        <div className="flex space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
