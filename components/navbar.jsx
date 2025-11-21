// import Link from "next/link"
'use client'
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  

  const links = [
    { name: "about me", path: "#about" },   
    { name: "Skills", path: "#skills" },   
    { name: "Project", path: "#project" },   
  ]
  return(
    <nav className="w-full flex justify-center mb-20 mt-2 ">
      <div className="backdrop-blur-md bg-blue-400 fixed    border border-white/20 shadow-lg 
        rounded-lg px-8 py-3 flex items-center justify-between gap-10 
        max-w-200 w-full">

        {/* Logo */}
        <div className="text-xl font-semibold text-white">LOGO</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-gray-200 hover:text-blue-400 transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden absolute top-24 w-[85%] mx-auto bg-white/10 
          backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-5 flex flex-col gap-4 text-center">

          {links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-gray-200 hover:text-blue-400 transition font-medium text-lg"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
    
  )
}