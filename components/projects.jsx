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
      stack: "Stack : React + Next.js",
      github: "https://github.com/ShinzDev/bosunDecourations",
    },
    {
      title: "Automate",
      img: "auto1.png",
      link: "https://doordash-nine.vercel.app/",
      desc: "Allows users to browse, book, and manage car rentals with an intuitive UI.",
      stack: "Stack : Next.js - Tailwind CSS - Django backend",
      github: "https://github.com/ShinzDev/Doordash",
    },
    {
      title: "Doughflow",
      img: "dough.png",
      link: "https://doughflow-ivory.vercel.app/",
      desc: "used to tracks and calculate daily sales of different bread types for a real business operation",
      stack: "Stack : React + Next.js",
      github: "https://github.com/ShinzDev/doughflow",
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
                <h5> {p.stack}</h5>
                <br />
                {p.desc}
              </div>
              <div className="p-5 grid gap-2 grid-cols-2">
                <button
                  className="rounded-md p-3 hover:bg-[#BFFFD1] duration-1000  transition-all ease-in-out  font-sans font-semibold bg-white text-black"
                  onClick={() => window.open(p.link, "_blank")}
                >
                  check project
                </button>
                <button
                  className="bg-[#08872B]  hover:bg-[#C06EFF]  rounded-md"
                  onClick={() => window.open(p.github, "_blank")}
                >
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
