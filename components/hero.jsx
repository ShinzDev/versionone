"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const profile = [
    {
      img: "/shina3.png",
      profession: "Software Developer",
    },
  ];

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white grid grid-cols-1 
      md:grid-cols-2  sm:grid-cols-2 items-center  justify-center px-10"
    >
      {profile.map((p, index) => {
        return (
          <div className="text-left p-7"  key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
            <Image
              src={p.img}
              width={400}
              height={400}
              className="rounded-md border-t-gray-50 mt-20"
              alt="shina"
            />
            <h1 className="text-2xl px-2 py-2">  Hi, I'm Shina</h1>
            <h1 className="text-5xl  py-2">{p.profession}</h1>
            <div className="bg-neutral-100 text-neutral-800 font-medium rounded-md text-pretty
              px-2 py-2 hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black transition duration-500">
              <p className="text-md ">
                Frontend web developer passionate about building clean, user-friendly digital experiences. 
                Skilled in React, TypeScript, JavaScript, and Tailwind CSS. Experienced in creating functional
                web apps, integrating APIs, and documenting build processes. 
                Strong problem-solving mindset and hands-on project history, 
                including business-focused tools and creative tech solutions.
                {" "}
              </p>{" "}
            </div>
              </motion.div>
          </div>
        );
      })}

      <div>
        <section id="contact" className="w-full py-32 bg-white text-black dark:bg-black dark:text-white">
          <div className="max-w-xl mx-auto ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/5 backdrop-blur-xl border border-black/10 dark:bg-white/5 dark:border-red-500/10 
              rounded-3xl p-8 md:p-10 shadow-2xl">
              {/* Full Name + Email */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-sm text-black/70 dark:text-white/70">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-black/5 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/30 transition dark:bg-white/10 dark:text-white dark:placeholder-white/40 dark:focus:ring-white/30"
                  />
                </div>

                <div>
                  <label className="text-sm text-black/70 dark:text-white/70">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-black/5 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/30 transition dark:bg-white/10 dark:text-white dark:placeholder-white/40 dark:focus:ring-white/30"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="text-sm text-black/70 dark:text-white/70">Brief Overview</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-black/5 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/30 transition dark:bg-white/10 dark:text-white dark:placeholder-white/40 dark:focus:ring-white/30"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/2348085123238?text=Name:%20${form.name}%0AEmail:%20${form.email}%0AMessage:%20${form.message}`,
                  )
                }
                className="w-full py-4 rounded-xl bg-black text-white font-medium text-lg hover:opacity-90 transition shadow-lg dark:bg-white dark:text-black"
              >
                Send
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}









