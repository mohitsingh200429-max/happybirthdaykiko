'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function FinalSection() {
  const [hugRevealed, setHugRevealed] = useState(false);

  return (
    <section className="py-40 px-6 bg-[#0f172a] relative flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f43f5e]/10 via-[#0f172a] to-[#0f172a] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-[#fde2e4] mb-16">Happy Birthday My Khushi</h2>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-20">
            <p>
              If the world ever becomes difficult,<br/>
              remember one thing:
            </p>
            <div className="text-2xl md:text-3xl font-serif text-[#f43f5e] space-y-2 py-4">
              <p>You are loved.</p>
              <p>Deeply.</p>
              <p>Truly.</p>
            </div>
            <p className="text-gray-400">
              And I will always be here, trying to deserve you.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {!hugRevealed ? (
              <button
                onClick={() => setHugRevealed(true)}
                className="px-8 py-4 rounded-full bg-[#f43f5e] text-white font-medium hover:bg-[#e11d48] transition-colors duration-300 shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:shadow-[0_0_30px_rgba(244,63,94,0.5)]"
              >
                ❤️ Hug Pending
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-serif text-[#fde2e4]"
              >
                I love you.
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
