import ParticleBackground from './components/ParticleBackground';
import Navbar    from './components/Navbar';
import Hero      from './sections/Hero';
import About     from './sections/About';
import Skills    from './sections/Skills';
import Journey   from './sections/Journey';
import Projects  from './sections/Projects';
import Contact   from './sections/Contact';
import Footer    from './components/Footer';

export default function App() {
  return (
    <>
      {/* Single particle canvas fixed behind everything */}
      <ParticleBackground />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
