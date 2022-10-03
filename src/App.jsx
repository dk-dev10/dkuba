import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';

import Navbar from './components/ui/Navbar/Navbar';

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <div style={{ height: '150vh' }}>
        <Home />
        <About />
      </div>
    </div>
  );
}
