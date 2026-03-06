'use client';

import { motion } from 'motion/react';

export default function BirthdayMessage() {
  return (
    <section className="py-32 px-6 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#fde2e4] mb-4">Today Is About You</h2>
          <div className="w-24 h-[1px] bg-[#f43f5e]/50 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-12 text-lg md:text-xl text-gray-300 font-light leading-relaxed"
        >
          <p>
            Out of all the days in the year,<br/>
            today is my favorite.
          </p>
          <p className="text-2xl md:text-3xl font-serif text-[#fde2e4]">
            Because today the girl who changed my life was born.
          </p>
          <div className="space-y-2 text-gray-400">
            <p>Your smile,</p>
            <p>your eyes,</p>
            <p>your stubbornness,</p>
            <p>your care,</p>
            <p>your love.</p>
          </div>
          <p className="text-[#f43f5e] font-serif text-2xl md:text-3xl pt-8">
            Everything about you makes my world brighter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
