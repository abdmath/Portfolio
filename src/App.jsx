import './index.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks'; // Import SocialLinks
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <SocialLinks /> 
      <main>
        <Hero />
        <div className="content-wrapper">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App;