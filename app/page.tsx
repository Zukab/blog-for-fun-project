import Hero from '@/components/sections/Hero';
import LivingAlone from '@/components/sections/LivingAlone';
import LivingWithFamily from '@/components/sections/LivingWithFamily';
import Conclusion from '@/components/sections/Conclusion';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <LivingAlone />
      <LivingWithFamily />
      <Conclusion />
    </main>
  );
}