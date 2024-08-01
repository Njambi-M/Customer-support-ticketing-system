import React from 'react';
import { XCircleIcon, Bars3Icon } from '@heroicons/react/24/outline'; // Using Heroicons for menu icons

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-rose-600">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XCircleIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between sm:items-stretch">
            <div className="flex-shrink-0">
              <a href="#" className="text-white text-xl font-bold">Logo</a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 ml-auto">
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Register</a>
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Login</a>
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Register</a>
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}
