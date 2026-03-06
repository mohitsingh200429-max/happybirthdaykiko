'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const stats = [
  { label: "Messages we sent each other", value: "∞" },
  { label: "Fights we survived", value: "100%" },
  { label: "Reasons I love you", value: "Still counting…" },
  { label: "Days you made my life better", value: "Every single one" }
];

export default function MessageCounter() {
  return (
    <section className="py-32 px-6 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#fde2e4] mb-4">Our Little Statistics</h2>
          <div className="w-24 h-[1px] bg-[#f43f5e]/50 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors duration-300 flex flex-col items-center justify-center min-h-[200px]"
            >
              <h3 className="text-4xl md:text-5xl font-serif text-[#f43f5e] mb-4">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-light text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
