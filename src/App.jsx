import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import LookingFor from './components/LookingFor';
import Contact from './components/Contact';
import Footer from './components/Footer';




export default function App() {
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        if (currentY < lastScrollY.current - 2) {
          setScrollDirection('up');
        } else if (currentY > lastScrollY.current + 2) {
          setScrollDirection('down');
        }
        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className={`page-scroll-shell ${scrollDirection === 'up' ? 'page-scroll-shell--reverse' : ''}`}>
        <Hero />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <LookingFor />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
