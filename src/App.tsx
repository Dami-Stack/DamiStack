import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { MediaBar } from './components/MediaBar';
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';
import { Blog } from "./pages/Blog";
import { HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <HelmetProvider>
      <main className="w-screen py-4 min-h-screen bg-white text-black dark:bg-gray-950 dark:text-gray-50">
        <Header />
        <MediaBar />
        <section className="px-3 md:px-10 lg:px-20 pb-12 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </section>
        <Footer />
      </main>
    </HelmetProvider>
  );
}

export default App;
