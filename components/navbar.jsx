"use client"

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10 border-b border-white/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-lg font-semibold tracking-wide"
        >
          Bluey.
        </motion.div>

        {/* Nav Links */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="hidden md:flex items-center space-x-10"
        >
          {[
            { name: "Home", href: "#home" },
            { name: "Projects", href: "#projects" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm tracking-wide"
              >
                {item.name}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Menu Icon */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </motion.button>
      </nav>
    </header>
  );
}
