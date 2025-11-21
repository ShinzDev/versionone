'use client'

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6"
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto text-center select-none">
        {/* Cinematic Fade-In Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight"
        >
          Crafting <span className="text-gray-400">digital stories</span><br />
          through code & visuals.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Cinematic minimalism — designed and built with intention.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-10 flex items-center justify-center space-x-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition duration-300 text-sm tracking-wide"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition duration-300 text-sm tracking-wide"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
