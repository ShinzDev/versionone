'use client'

import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Bosun Decoration",
      img: "showcase.png",
      link : 'https://shin-xdecour.vercel.app/',
      desc: "A cinematic dashboard for daily bread distribution.",
    },
    {
      title: "Automate",
      img: "auto1.png",
      link : 'https://doordash-nine.vercel.app/',
      
      desc: "React + Next.js app that scrapes creators' links for promo codes.",
    },
    {
      title: "Cinematic QR Code System",
      img: "https://via.placeholder.com/1200x700",
      link : 'https://shin-xdecour.vercel.app/',
      
      desc: "A smooth, modern attendance system with QR scans and PDF outputs.",
    },
  ];

  return (
    <section id="projects" className="w-full py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 tracking-wide">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={() => window.open(p.link, '_blank')}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  
                  className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm opacity-80 mt-2">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
