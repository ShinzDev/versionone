"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Bosun Decoration",
      img: "showcase.png",
      link: "https://shin-xdecour.vercel.app/",
      desc: "An events decoration website ",
    },
    {
      title: "Automate",
      img: "auto1.png",
      link: "https://doordash-nine.vercel.app/",
      desc: "React + Next.js app that scrapes creators' links for promo codes.",
    },
    {
      title: "Doughflow",
      img: "dough.png",
      link: "https://doughflow-ivory.vercel.app/",
      desc: "used to tracks and calculate daily sales of different bread types for a real business operation",
    },
  ];

  return (
    <section id="projects" className="w-full py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 tracking-wide">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              // onClick={() => window.open(p.link, '_blank')}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-64 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="p-2 text-left">
                {p.desc}
              </div>
              <div className="p-5 grid grid-cols-2">
                <button 
                  className=""
                  onClick={() => window.open(p.link, "_blank")}>
                  check project
                </button>
                <button 
                  className=""
                  onClick={() => window.open(p.link, "_blank")}>
                    Github
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
