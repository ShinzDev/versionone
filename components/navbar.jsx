'use client'

import { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <MotionConfig reducedMotion="user">
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/60 backdrop-blur-xl border-b border-black/10 dark:bg-black/60 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl font-semibold tracking-wide text-black dark:text-white">Shina.</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-black dark:text-white text-sm items-center">
            <a href="#projects" className="hover:opacity-60 transition" >Projects</a>
            <a href="#contact" className="hover:opacity-60 transition">Contact</a>
          </div>

          {/* Theme Toggle */}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="text-black dark:text-white hover:opacity-60 transition p-1"
          >
            {mounted && (resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black dark:text-white"
            onClick={() => setOpen(!open)}
          >
            <motion.div
              initial={false}
              animate={open ? { rotate: 45 } : { rotate: 0 }}
              className="w-6 h-[2px] bg-black dark:bg-white mb-1"
            />
            <motion.div
              initial={false}
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-black dark:bg-white mb-1"
            />
            <motion.div
              initial={false}
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-black dark:bg-white"
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-t border-black/10 dark:bg-black/80 dark:border-white/10 px-6 py-4 flex flex-col gap-4 text-black dark:text-white text-sm"
          >
            <a href="#projects" className="py-2 border-b border-black/10 dark:border-white/10">Projects</a>
            <a href="#contact" className="py-2">Contact</a>
          </motion.div>
        )}
      </nav>
    </MotionConfig>
  );
}
