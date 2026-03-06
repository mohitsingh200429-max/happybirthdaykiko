'use client';

import { motion } from 'motion/react';

const promises = [
  "I will always try to understand you better",
  "I will try harder to make you feel valued",
  "I will never stop choosing you",
  "I will fight for us, not against you"
];

export default function PromisesSection() {
  return (
    <section className="py-32 px-6 bg-[#0a0f1c] relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#fde2e4] mb-4">Things I Promise You</h2>
          <div className="w-24 h-[1px] bg-[#f43f5e]/50 mx-auto" />
        </motion.div>

        <div className="space-y-6 max-w-2xl mx-auto">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-[#f43f5e] shrink-0" />
              <p className="text-lg md:text-xl text-gray-300 font-light">
                {promise}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
