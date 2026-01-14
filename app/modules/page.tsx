// System
import CardsSection from '@/components/CardSection';
import { SECTIONS } from '@/data/modules';
// Import sections
import HeroModules from '@/sections/HeroModules';
import NavigationBar from '@/sections/NavigationBar';
import SecondNavBar from '@/sections/SecondNavBar';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <>
      <div className='bg-white text-[#66243E] overflow-x-clip '>
        <NavigationBar />
        <HeroModules />
        <SecondNavBar />
        <div className="space-y-20">
          {SECTIONS.map((section, i) => (
            <CardsSection key={i} {...section} />
          ))}
        </div>
      </div>
      <div className='w-full bg-[#66243E]'>
        <Footer marginTop='mt-0'/>
      </div>
    </>
  );
}
