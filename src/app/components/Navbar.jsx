"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="relative z-50 h-24 select-none">
      <div className="container mx-auto flex items-center justify-between h-24 border-b border-gray-200 px-6">
        {/* Logo Section (Left-Aligned) */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center py-4 space-x-2 font-extrabold text-gray-900">
            <img src="https://www.kjei.edu.in/tcoer/images/logo.png" alt="logo" width={60} />
          </Link>
        </div>

        {/* Navbar Links (Centered) */}
        <div className="hidden md:flex space-x-24 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/Admission" className="py-2 text-gray-700 hover:text-red-500">Admission</Link>
          <Link href="/Schlorship" className="py-2 text-gray-700 hover:text-red-500">Scholarship</Link>
          <Link href="/Gallery" className="py-2 text-gray-700 hover:text-red-500">Gallery</Link>
          <Link href="/Library" className="py-2 text-gray-700 hover:text-red-500">Library</Link>
          <Link href="/Contact" className="py-2 text-gray-700 hover:text-red-500">Contact</Link>
        </div>

        {/* Menu Button (Right-Aligned with Sidebar Trigger) */}
        <div className="hidden md:flex">
          <button
            onClick={() => setShowSidebar(true)}
            className="px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-red-500 delay-75 mr-[20px] ease-linear"
          >
            Menu
          </button>
        </div>

        {/* Mobile Menu Button (Right-Aligned) */}
        <div
          onClick={() => setShowSidebar(true)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer hover:bg-gray-100 mr-[20px]"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setShowSidebar(false)}
            className="text-gray-700 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start px-6 space-y-4">
          <Link href="/Admission" className="py-2 text-gray-700 hover:text-black w-full">Admission</Link>
          <Link href="/Department" className="py-2 text-gray-700 hover:text-black w-full">Department</Link>
          <Link href="/Gallery" className="py-2 text-gray-700 hover:text-black w-full">Gallery</Link>
          <Link href="/Library" className="py-2 text-gray-700 hover:text-black w-full">Library</Link>
          <Link href="/President_Message" className="py-2 text-gray-700 hover:text-black w-full">President's Message</Link>
          <Link href="/Principal_Message" className="py-2 text-gray-700 hover:text-black w-full">Principal's Message</Link>
          <Link href="/Schlorship" className="py-2 text-gray-700 hover:text-black w-full">Scholarship</Link>
          <Link href="/Administrative_Office" className="py-2 text-gray-700 hover:text-black w-full">Administrative Office</Link>
          <Link href="/Contact" className="py-2 text-gray-700 hover:text-black w-full">Contact</Link>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {showSidebar && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-opacity-30 transition-opacity duration-300"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;