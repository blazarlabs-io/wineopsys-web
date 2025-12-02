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

export default function Home() {
  return (
    <div className='bg-white text-[#66243E] overflow-x-hidden'>
      <NavigationBar />
      <Hero />
      <Features />
      <div className='relative'>
        {/* object-left */}
        <div className="pointer-events-none absolute right-[-120px] top-[-180px] w-[500px] sm:w-[857px] z-0">
          <Image
            src="/object-left.svg"
            alt="object-left"
            width={900}
            height={1200}
            className="w-full h-auto rounded-[60px]"  
            priority
          />
        </div>
        <HowItWork />
      </div>
      
      <WhoUsesWineopsys />
      <Team />
      <Contacts />
    </div>
  );
}
