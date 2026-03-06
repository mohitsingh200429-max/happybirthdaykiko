'use client';

import { motion } from 'motion/react';

const cards = [
  {
    title: "My Calm",
    text: "When my mind becomes chaos, your voice brings peace."
  },
  {
    title: "My Happiness",
    text: "Your smile fixes days I thought were impossible."
  },
  {
    title: "My Home",
    text: "Wherever you are, that place feels like home."
  }
];

export default function WhatYouMean() {
  return (
    <section className="py-32 px-6 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f43f5e]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#fde2e4] mb-4">What You Became In My Life</h2>
          <div className="w-24 h-[1px] bg-[#f43f5e]/50 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-[#f43f5e]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="w-3 h-3 rounded-full bg-[#f43f5e]" />
              </div>
              <h3 className="text-2xl font-serif text-[#fde2e4] mb-4">{card.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
