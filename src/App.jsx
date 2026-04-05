import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import Stack from './pages/Stack';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Blogs from './pages/Blogs';
import Connect from './pages/Connect';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
