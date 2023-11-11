'use client';

import React, { useState } from "react";
import  Link  from 'next/link'

function Navbar() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  let toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // !flase = true, !true = false
  }
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="./Home_page.jsx" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Numerical Method</span>
        </a>
        <div className="flex items-center justify-between" id="navbar-multi-level">

        {/* Toggle Menu Button */}
        <div className="md:hidden">
          <button id='menu-toggle' className='text-black dark:text-white' onClick={toggleMenu}>
            <svg fill = 'none' stroke = 'currentColor' stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>  
          </button>
        </div>

        <ul className="hidden md:flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <Link href="/rooteq" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Root of Equation</Link>
            </li>
            <li>
            <Link href="/linear" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Linear Algebra</Link>
            </li>
            <li>
            <Link href="/interpolation" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Iterpolation & Extrapolation</Link>
            </li>
            <li>
            <Link href="/diff" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Differentiation</Link>
            </li>
            <li>
            <Link href="/intergrat" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Integration</Link>
            </li>
        </ul>
        </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen ? (
    <ul className="flex-col md:hidden spacce-x-4 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <Link href="/rooteq" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Root of Equation</Link>
            </li>
            <li>
            <Link href="/linear" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Linear Algebra</Link>
            </li>
            <li>
            <Link href="/interpolation" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Iterpolation & Extrapolation</Link>
            </li>
            <li>
            <Link href="/diff" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Differentiation</Link>
            </li>
            <li>
            <Link href="/intergrat" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Integration</Link>
            </li>
        </ul>
        ) : null}
    </nav>
  );
}

export default Navbar;