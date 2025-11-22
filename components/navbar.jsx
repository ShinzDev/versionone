'use client'

import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <nav className="w-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl font-semibold tracking-wide text-white">Bluey.</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-white text-sm">
            <a href="#projects" className="hover:opacity-60 transition">Projects</a>
            <a href="#about" className="hover:opacity-60 transition">About</a>
            <a href="#contact" className="hover:opacity-60 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            <motion.div
              initial={false}
              animate={open ? { rotate: 45 } : { rotate: 0 }}
              className="w-6 h-[2px] bg-white mb-1"
            />
            <motion.div
              initial={false}
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-white mb-1"
            />
            <motion.div
              initial={false}
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white"
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-white text-sm"
          >
            <a href="#projects" className="py-2 border-b border-white/10">Projects</a>
            <a href="#reel" className="py-2 border-b border-white/10">Reel</a>
            <a href="#about" className="py-2 border-b border-white/10">About</a>
            <a href="#contact" className="py-2">Contact</a>
          </motion.div>
        )}
      </nav>
    </MotionConfig>
  );
}