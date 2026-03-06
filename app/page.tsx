import HeroSection from '@/components/HeroSection';
import OurStory from '@/components/OurStory';
import WhatYouMean from '@/components/WhatYouMean';
import HonestSection from '@/components/HonestSection';
import BirthdayMessage from '@/components/BirthdayMessage';
import PromisesSection from '@/components/PromisesSection';
import MessageCounter from '@/components/MessageCounter';
import MemoryGallery from '@/components/MemoryGallery';
import FinalSection from '@/components/FinalSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-[#ffffff] selection:bg-[#f43f5e]/30 selection:text-white">
      <HeroSection />
      <OurStory />
      <WhatYouMean />
      <HonestSection />
      <BirthdayMessage />
      <PromisesSection />
      <MessageCounter />
      <MemoryGallery />
      <FinalSection />
    </main>
  );
}
