'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const messages = [
  "You are my calm",
  "You are my happiness",
  "You are my home",
  "Happy Birthday Khushi"
];

export default function HeroSection() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentMessage = messages[messageIndex];

    if (isTyping) {
      if (displayText.length < currentMessage.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentMessage.slice(0, displayText.length + 1));
        }, 100);
      } else {
        if (messageIndex < messages.length - 1) {
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, 2000);
        }
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setMessageIndex((prev) => prev + 1);
          setIsTyping(true);
        }, 50);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, messageIndex]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background blur/gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/90 to-[#0f172a] z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f43f5e]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
        <div className="h-16 mb-8 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#fde2e4]/80 tracking-wide">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: messageIndex === messages.length - 1 && displayText === messages[messageIndex] ? 1 : 0, y: messageIndex === messages.length - 1 && displayText === messages[messageIndex] ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">
            Happy Birthday Khushi <span className="text-[#f43f5e]">❤️</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-2 font-light tracking-wide">
            The day my world became brighter.
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-12 font-light leading-relaxed max-w-xl mx-auto">
            Today is not just your birthday.<br/>
            It is the day the person who changed my life was born.
          </p>

          <motion.a
            href="#our-story"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex flex-col items-center group cursor-pointer"
          >
            <span className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm tracking-widest uppercase mb-4">
              ↓ Read Something I Wrote For You
            </span>
            <span className="text-xs text-gray-500 tracking-wider">
              (Please read till the end)
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
