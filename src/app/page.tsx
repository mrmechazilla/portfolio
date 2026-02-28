import Hero from '@/components/sections/Hero';
import Navbar from '@/components/layout/Navbar';
import CustomCursor from '@/components/layout/CustomCursor';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}