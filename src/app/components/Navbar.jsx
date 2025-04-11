"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="relative z-50 h-24 select-none">
      <div className="container mx-auto flex items-center justify-between h-24 border-b border-gray-200 px-6">
        {/* Logo Section (Left-Aligned) */}
        <div className="flex items-center">
          <a href="#" className="flex items-center py-4 space-x-2 font-extrabold text-gray-900">
            <img src="https://www.kjei.edu.in/tcoer/images/logo.png" alt="logo" width={60} />
          </a>
        </div>

        {/* Navbar Links (Centered) */}
        <div className="hidden md:flex space-x-24 absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="py-2 text-red-500 hover:text-red-500">Admission</a>
          <a href="#" className="py-2 text-gray-700 hover:text-red-500">Training & Placement</a>
          <a href="#" className="py-2 text-gray-700 hover:text-red-500">Approvals</a>
          <a href="#" className="py-2 text-gray-700 hover:text-red-500">Gallery</a>
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
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
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
          <a href="/Traning" className="py-2 text-black hover:text-gray-700">Admission</a>
          <a href="#" className="py-2 text-gray-700 hover:text-black">Training & Placement</a>
          <a href="#" className="py-2 text-gray-700 hover:text-black">Approvals</a>
          <a href="#" className="py-2 text-gray-700 hover:text-black">Gallery</a>
    
        </div>
      </div>

      {/* Overlay when sidebar is open (Adjusted opacity) */}
      {showSidebar && (
        <div
          className="fixed top-0 left-0 w-full h-full  bg-opacity-30 transition-opacity duration-300"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;