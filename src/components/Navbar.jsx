import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const inactiveClass = "text-slate-400 font-medium hover:text-white transition-colors font-headline text-sm uppercase tracking-widest";
  const activeClass = "text-[#00F0FF] font-bold border-b-2 border-[#00F0FF] font-headline text-sm uppercase tracking-widest transition-all";

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e0e0f]/80 backdrop-blur-xl border-b border-[#484849]/15 shadow-[0_20px_40px_rgba(0,240,255,0.08)]">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#00F0FF]" data-icon="terminal">terminal</span>
                <span className="text-2xl font-bold tracking-widest text-[#00F0FF] font-headline uppercase">VIJAY</span>
            </div>
            <nav className="hidden md:flex gap-8 items-center">
                <Link className={path === '/' ? activeClass : inactiveClass} to="/">Home</Link>
                <Link className={path === '/stack' ? activeClass : inactiveClass} to="/stack">Stack</Link>
                <Link className={path === '/projects' ? activeClass : inactiveClass} to="/projects">Projects</Link>
                <Link className={path === '/research' ? activeClass : inactiveClass} to="/research">Research</Link>
                <Link className={path === '/blogs' ? activeClass : inactiveClass} to="/blogs">Blogs</Link>
                <Link className={path === '/connect' ? activeClass : inactiveClass} to="/connect">Connect</Link>
            </nav>
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-[#262627] hover:text-[#8ff5ff] rounded-md transition-all active:scale-95">
                    <span className="material-symbols-outlined" data-icon="light_mode">light_mode</span>
                </button>
                <button className="md:hidden p-2">
                    <span className="material-symbols-outlined" data-icon="menu">menu</span>
                </button>
            </div>
        </div>
    </header>
  );
}
