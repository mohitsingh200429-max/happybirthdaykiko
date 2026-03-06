'use client';

import { motion } from 'motion/react';

export default function HonestSection() {
  return (
    <section className="py-40 px-6 bg-[#0a0f1c] relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f43f5e]/5 via-[#0a0f1c] to-[#0a0f1c] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#fde2e4] mb-12">Something I Need To Say</h2>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I know you are upset with me right now.<br/>
              And honestly… you have every right to be.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-400"
            >
              I make mistakes.<br/>
              Sometimes I say things wrong.<br/>
              Sometimes I forget things that matter to you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              But none of those mistakes change one thing:
            </motion.p>

            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-3xl md:text-4xl font-serif text-[#f43f5e] py-4"
            >
              I love you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-gray-400"
            >
              Not in the perfect way.<br/>
              But in the real way.<br/>
              The way where I want to grow and become better for you.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
