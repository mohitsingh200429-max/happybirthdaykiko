'use client';

import { motion } from 'motion/react';

const storyBlocks = [
  {
    title: "The First Conversations",
    text: "What started as simple messages slowly became something I never expected — you."
  },
  {
    title: "The First Time I Saw You",
    text: "I remember thinking: how can someone look this beautiful and still smile so shyly."
  },
  {
    title: "The First Moment",
    text: "That moment when our story truly started. And I realized something...\nI didn't just like you.\nI needed you."
  }
];

export default function OurStory() {
  return (
    <section id="our-story" className="py-32 px-6 relative bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#fde2e4] mb-4">How It All Began</h2>
          <div className="w-24 h-[1px] bg-[#f43f5e]/50 mx-auto" />
        </motion.div>

        <div className="space-y-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {storyBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0f172a] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-[#f43f5e]" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
                <h3 className="text-xl font-serif text-[#fde2e4] mb-3">{block.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed whitespace-pre-line">
                  {block.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
