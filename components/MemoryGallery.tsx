'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

type Memory =
  | { type: 'image'; src: string; caption: string }
  | { type: 'video'; src: string; caption: string };

const memories: Memory[] = [
  { type: 'image', src: '/pic1.jpeg', caption: 'This smile.' },
  { type: 'image', src: '/pic2.jpeg', caption: 'This moment.' },
  { type: 'image', src: '/pic3.jpeg', caption: 'This memory.' },
  { type: 'video', src: '/vid1.mp4', caption: 'This feeling.' }
];

export default function MemoryGallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const playVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (video) video.play();
  };

  const pauseVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (video) video.pause();
  };

  const toggleVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="py-32 px-6 bg-[#0a0f1c] relative">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#fde2e4] mb-4">
            Moments That Mean Everything To Me
          </h2>

          <div className="w-24 h-[1px] bg-[#f43f5e]/50 mx-auto" />
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3]"
              onMouseEnter={
                memory.type === 'video'
                  ? () => playVideo(index)
                  : undefined
              }
              onMouseLeave={
                memory.type === 'video'
                  ? () => pauseVideo(index)
                  : undefined
              }
              onClick={
                memory.type === 'video'
                  ? () => toggleVideo(index)
                  : undefined
              }
            >

              {/* IMAGE */}
              {memory.type === 'image' && (
                <Image
                  src={memory.src}
                  alt={memory.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* VIDEO */}
              {memory.type === 'video' && (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={memory.src}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-2xl font-serif text-[#fde2e4] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {memory.caption}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}