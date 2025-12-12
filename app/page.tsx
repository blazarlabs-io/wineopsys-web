// System
import Image from 'next/image';
// Import sections
import Hero from '@/sections/Hero';
import NavigationBar from '@/sections/NavigationBar';
import Features from '@/sections/Features';
import HowItWork from '@/sections/HowItWork';
import WhoUsesWineopsys from '@/sections/WhoUsesWineopsys';
import Team from '@/sections/Team';
import Contacts from '@/sections/Contacts';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <>
      <div className='bg-white text-[#66243E] overflow-x-hidden'>
        <NavigationBar />
        <Hero />
        <Features />
        <div className='relative'>
          <HowItWork />
        </div>
        
        <WhoUsesWineopsys />
        <Team />
        <Contacts />
      </div>
      <div className='w-full bg-[#66243E]'>
        <Footer />
      </div>
    </>
  );
}
