import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-slate-900 text-white min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Resume />
                <Certificates />
                <Achievements />
                <Contact />
            </main>

            <footer className="bg-slate-900 py-8 border-t border-slate-800 text-center text-slate-400">
                <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
