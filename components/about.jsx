'use client'
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-black text-white px-6 py-24 md:py-32 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-80 md:h-full bg-[url(/shina2.png)] bg-cover bg-center rounded-2xl shadow-2xl"
        ></motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            I’m a front-end developer and visual creative who blends technology
            with cinematic storytelling. I design interfaces that feel
            intentional, minimal, and emotionally expressive — the kind that
            draw you in like a well-shot scene.
          </p>

          <p className="text-gray-400 leading-relaxed mt-6 text-lg">
            My work ranges from building sleek web apps to crafting visual
            narratives through photography and short-form film. Every project is
            an opportunity to merge aesthetics with functionality.
          </p>

          <a
            href="#contact"
            className="inline-block mt-10 px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition duration-300 text-sm tracking-wide"
          >
            Let's Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}