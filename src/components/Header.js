import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import logo from "../assets/logo-header.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isLoggedIn, logout } = useAuth();

  const navLinkClass = ({ isActive }) => 
    isActive 
      ? "block py-2 px-3 text-white bg-primary rounded-sm md:bg-transparent md:text-primary md:p-0 md:dark:text-primary" 
      : "block py-2 px-3 text-secondary rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white dark:bg-secondary w-full z-20 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-12" alt="Restaurant Logo" />
          </Link>
          <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button 
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}  
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto ${isMenuOpen ? '' : 'hidden'}`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-secondary dark:border-gray-700">
              <li>
                <NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink>
              </li>
              <li>
                <NavLink to="/menu" className={navLinkClass} onClick={closeMenu}>Menu</NavLink>
              </li>
              <li>
                <NavLink to="/reservations" className={navLinkClass} onClick={closeMenu}>Reservations</NavLink>
              </li>
              <li>
                <NavLink to="/order-online" className={navLinkClass} onClick={closeMenu}>Order Online</NavLink>
              </li>
              <li>
                {isLoggedIn ? (
                  <button 
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className="block py-2 px-3 text-secondary rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink to="/login" className={navLinkClass} onClick={closeMenu}>Login</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};