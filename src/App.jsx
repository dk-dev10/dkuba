import About from './components/pages/About/About';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/Home/Home';
import Projects from './components/pages/Projects/Projects';
import Skills from './components/pages/Skills/Skills';

import Navbar from './components/ui/Navbar/Navbar';

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <div>
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
