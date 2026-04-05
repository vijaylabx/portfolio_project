export default function Projects() {
  return (
    <div className="flex relative">
      {/* Side Navigation (Drawer Equivalent for Desktop Layout) */}
      <aside className="fixed inset-y-0 left-0 z-[60] flex-col p-6 h-screen w-80 bg-[#0e0e0f]/95 backdrop-blur-2xl transition-transform -translate-x-full lg:translate-x-0 hidden lg:flex">
        <div className="flex flex-col gap-8 h-full">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-[#131314]">
            <img alt="Vijay Profile Photo" className="w-12 h-12 rounded-full border border-primary/30 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAOgCwnHpGsXkB1vHL1w9RXpfx6DyBhOyylSwqAwZTQF56YUtPJNxgDmYx2sabJMlVNFjrY5lfJ1eyLo6mRZ7ispTgvIEBQxEJoarhtmALGlnO8e8PySQXD7PD6zF6OE9cJcjHV2kn80gZEo0KgpvqvCMejCtcBZz7wixj4qjKsYD9xuV4Jrv_Exf3aNV1w-8DUCxK__en93kWKGE1QHeY4fQJisNPLa2rnAKWER4gxs61Wt9DodDlzcgAIJoonsrh1lKGfuFptEc" />
            <div>
              <h3 className="font-headline font-black text-[#00F0FF] text-lg uppercase leading-tight">Vijay</h3>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">MERN &amp; Cyber Security</p>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
                <span className="text-[9px] font-mono text-tertiary">STATUS: ONLINE</span>
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <a className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-[#131314] transition-all font-label text-sm uppercase tracking-widest" href="#">
              <span className="material-symbols-outlined">account_circle</span> Dossier
            </a>
            <a className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-[#131314] transition-all font-label text-sm uppercase tracking-widest" href="/stack">
              <span className="material-symbols-outlined">layers</span> Stack
            </a>
            <a className="flex items-center gap-4 px-4 py-3 bg-[#262627] text-[#00F0FF] border-l-4 border-[#00F0FF] font-label text-sm uppercase tracking-widest translate-x-1" href="/projects">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>code</span> Projects
            </a>
            <a className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-[#131314] transition-all font-label text-sm uppercase tracking-widest" href="/research">
              <span className="material-symbols-outlined">security</span> Intel
            </a>
            <a className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-[#131314] transition-all font-label text-sm uppercase tracking-widest" href="/connect">
              <span className="material-symbols-outlined">send</span> Connect
            </a>
          </nav>
          <div className="mt-auto p-4 bg-[#131314] rounded-lg border border-outline-variant/10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono text-on-surface-variant">SECURE_CHANNEL</span>
              <span className="material-symbols-outlined text-xs text-primary">lock</span>
            </div>
            <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-primary to-secondary"></div>
            </div>
          </div>
        </div>
      </aside>

      <main className="lg:ml-80 pt-24 min-h-screen grow">
        <section className="max-w-7xl mx-auto px-8 py-12">
          <header className="mb-12 flex items-baseline gap-4">
            <h2 className="text-4xl font-headline font-black tracking-tighter uppercase text-white">Capabilities</h2>
            <span className="text-xs font-mono text-primary-dim tracking-[0.3em] uppercase opacity-60">System.Services[]</span>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative p-8 bg-surface-container-low rounded-xl border border-outline-variant/15 hover:border-primary/40 transition-all duration-500 glow-hover">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">data_object</span>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-primary">terminal</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-white mb-3">Architectural Dev</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Building high-performance MERN ecosystems with modular architecture and enterprise-grade security protocols.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[11px] font-mono text-primary-dim"><span className="w-1 h-1 bg-primary rounded-full"></span> REACT &amp; NEXT.JS</li>
                <li className="flex items-center gap-2 text-[11px] font-mono text-primary-dim"><span className="w-1 h-1 bg-primary rounded-full"></span> NODE.JS BACKENDS</li>
              </ul>
            </div>
            <div className="group relative p-8 bg-surface-container-low rounded-xl border border-outline-variant/15 hover:border-secondary/40 transition-all duration-500 glow-hover">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">policy</span>
              </div>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 border border-secondary/20">
                <span className="material-symbols-outlined text-secondary">shield</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-white mb-3">Security Audits</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Comprehensive vulnerability assessments and code reviews to identify critical logic flaws before deployment.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[11px] font-mono text-secondary"><span className="w-1 h-1 bg-secondary rounded-full"></span> LOGIC AUDITS</li>
                <li className="flex items-center gap-2 text-[11px] font-mono text-secondary"><span className="w-1 h-1 bg-secondary rounded-full"></span> THREAT MODELING</li>
              </ul>
            </div>
            <div className="group relative p-8 bg-surface-container-low rounded-xl border border-outline-variant/15 hover:border-tertiary/40 transition-all duration-500 glow-hover">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">biotech</span>
              </div>
              <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6 border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary">biotech</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-white mb-3">Pentesting</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Offensive security operations designed to bypass defenses and provide actionable remediation roadmaps.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[11px] font-mono text-tertiary-dim"><span className="w-1 h-1 bg-tertiary rounded-full"></span> NETWORK INTRUSION</li>
                <li className="flex items-center gap-2 text-[11px] font-mono text-tertiary-dim"><span className="w-1 h-1 bg-tertiary rounded-full"></span> API EXPLOITATION</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-headline font-black tracking-tighter uppercase text-white">Active Projects</h2>
              <p className="text-on-surface-variant text-sm font-mono mt-2 tracking-wide">// RECENTLY_DEPLOYED_MODULES</p>
            </div>
            <button className="text-xs font-label uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:text-white hover:border-white transition-all">View Archive</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <article className="group bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/20 transition-all duration-700 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img alt="NetVigil Dashboard" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACu1o3vxClTvU_KzKbIZNgdoyMZVQUKZxxYlTlSQqzlYAAq7_Cwz7Ui5zW29d5rZyoyMaoYXn0yTPvCeiFbxgM6X8V-4pbYPOXBKTodLp8ypoGvOUCZMfAUKc5cxUOS5vDyEdLQMbM40ttSWhPR38Ymr7_TBtGTsCnJucECifZ4l-rSUG-sJRyCtxj-NRELf9Pj2TB2SpAQi6LmcI71K3RR4P6jxHNLY64_N2ny-yEzQ82mFrweuReYZpD4Sv-Lfwj_4WDOe-mw58" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-2 py-1 bg-surface-container-highest/80 backdrop-blur-md text-[10px] font-mono text-primary-dim border border-primary/20 rounded">REACT</span>
                  <span className="px-2 py-1 bg-surface-container-highest/80 backdrop-blur-md text-[10px] font-mono text-primary-dim border border-primary/20 rounded">REDIS</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-headline font-bold text-white group-hover:text-primary transition-colors">NetVigil OS</h3>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:rotate-45 transition-transform">north_east</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Real-time network traffic analyzer and intrusion detection system with visual threat mapping.</p>
                <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
                  <span className="text-[10px] font-mono text-outline uppercase tracking-tighter">v2.4.0_Stable</span>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-primary-container/20 border border-primary/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px] text-primary">hub</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="group bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 hover:border-secondary/20 transition-all duration-700 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img alt="GhostCrypt Interface" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPhCw65Gz6PYg2pa0ozaFc0585gg7LuOHZxdb0sJboDElCwzZhOOzUnO9ETp2I4v4P_P5pwEFleY6P9dEs1e-YlaEZxNAk9kDoqE9B3LN0nbNAB0Gh6pziwyxitcoTj9eyhyUNPpEXjGOrdQCbgks6mg_9OrBmGIBruScBYLZLSUrChxIHKz9YegkXHQndQiLenZDt7PpuKqHzcaN9zGg2CdIIkD8Ph9761LDaSbNqDl0kesbmFwlbG95xKGiZk6sjV2Gw91f9xho" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-2 py-1 bg-surface-container-highest/80 backdrop-blur-md text-[10px] font-mono text-secondary border border-secondary/20 rounded">RUST</span>
                  <span className="px-2 py-1 bg-surface-container-highest/80 backdrop-blur-md text-[10px] font-mono text-secondary border border-secondary/20 rounded">WASM</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-headline font-bold text-white group-hover:text-secondary transition-colors">GhostCrypt</h3>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:rotate-45 transition-transform">north_east</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Zero-knowledge end-to-end encrypted messaging engine utilizing post-quantum cryptography.</p>
                <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
                  <span className="text-[10px] font-mono text-outline uppercase tracking-tighter">BETA_ENCRYPTED</span>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-secondary-container/20 border border-secondary/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px] text-secondary">encrypted</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="group bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 hover:border-tertiary/20 transition-all duration-700 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img alt="Aether Node Map" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5f-_fgkVBr7SZvTOzeqUUU6k4no-JHep5YJfoG6MvoiaJUUtxzWEk4Esih1QSWThc_zUdfrLPU5BCHcmh3uuTWA5UVVPxR5wmTCrqMxTkiiS-QgBzVn_590Xu5r1-Qg4cnDaWgw4xxM5pCGCd8zxGnoBKQ44d4rtaYtpiAzrn3My5oGg-lTxBW5SELOn5eiIZWpgd7aP7d9kDqsvbXTUrMG-2Q92tP6m0U-D7IDRS6J9Mz4klsnkfwZuSDWqrktCy98d5CD054sc" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-2 py-1 bg-surface-container-highest/80 backdrop-blur-md text-[10px] font-mono text-tertiary border border-tertiary/20 rounded">NODE.JS</span>
                  <span className="px-2 py-1 bg-surface-container-highest/80 backdrop-blur-md text-[10px] font-mono text-tertiary border border-tertiary/20 rounded">MONGODB</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-headline font-bold text-white group-hover:text-tertiary transition-colors">Aether Mesh</h3>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:rotate-45 transition-transform">north_east</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Decentralized P2P node network for off-grid communication and local data sharing.</p>
                <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
                  <span className="text-[10px] font-mono text-outline uppercase tracking-tighter">DECENTRALIZED</span>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-tertiary-container/20 border border-tertiary/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px] text-tertiary">language</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 py-20 bg-surface-container-low/30">
          <div className="mb-16 text-center">
            <span className="text-xs font-mono text-primary tracking-[0.4em] uppercase">Chronology</span>
            <h2 className="text-5xl font-headline font-black tracking-tighter uppercase text-white mt-4">Journey Log</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block opacity-30"></div>
            <div className="space-y-16 relative z-10">
              <div className="relative flex flex-col md:flex-row items-center gap-12 group">
                <div className="flex-1 md:text-right hidden md:block">
                  <span className="text-sm font-mono text-primary uppercase">Current // Present</span>
                  <h3 className="text-2xl font-headline font-bold text-white mt-1">Lead Cyber Architect</h3>
                  <p className="text-on-surface-variant font-label text-sm mt-2">Vanguard Defense Systems</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(143,245,255,0.4)] relative">
                  <span className="material-symbols-outlined text-primary bg-background">rocket_launch</span>
                </div>
                <div className="flex-1 p-8 bg-surface-container rounded-xl border border-outline-variant/15 hover:border-primary/30 transition-colors">
                  <div className="md:hidden mb-4">
                    <span className="text-xs font-mono text-primary uppercase">Present</span>
                    <h3 className="text-xl font-headline font-bold text-white">Lead Cyber Architect</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Overseeing full-stack secure infrastructure for fintech clients. Reduced attack surface by 40% through custom middleware implementation and zero-trust protocols.</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-surface-bright rounded text-white/70">ARCH_SECURITY</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-surface-bright rounded text-white/70">CLOUD_SYSTEMS</span>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row-reverse items-center gap-12 group">
                <div className="flex-1 md:text-left hidden md:block">
                  <span className="text-sm font-mono text-secondary uppercase">2022 // 2023</span>
                  <h3 className="text-2xl font-headline font-bold text-white mt-1">Full Stack Developer</h3>
                  <p className="text-on-surface-variant font-label text-sm mt-2">Nexus Digital Agency</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-background border-2 border-secondary flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-secondary bg-background">layers</span>
                </div>
                <div className="flex-1 p-8 bg-surface-container rounded-xl border border-outline-variant/15 hover:border-secondary/30 transition-colors">
                  <div className="md:hidden mb-4">
                    <span className="text-xs font-mono text-secondary uppercase">2022 // 2023</span>
                    <h3 className="text-xl font-headline font-bold text-white">Full Stack Developer</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Developed complex React applications with Node.js backends. Specialized in high-performance state management and real-time data sync using Socket.io.</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-surface-bright rounded text-white/70">REACT_EXP</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-surface-bright rounded text-white/70">BACKEND_AUTH</span>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row items-center gap-12 group">
                <div className="flex-1 md:text-right hidden md:block">
                  <span className="text-sm font-mono text-outline uppercase">2020 // 2022</span>
                  <h3 className="text-2xl font-headline font-bold text-white mt-1">Junior Pentester</h3>
                  <p className="text-on-surface-variant font-label text-sm mt-2">CyberLabs Global</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-background border-2 border-outline flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-outline bg-background">security</span>
                </div>
                <div className="flex-1 p-8 bg-surface-container rounded-xl border border-outline-variant/15 hover:border-outline-variant transition-colors">
                  <div className="md:hidden mb-4">
                    <span className="text-xs font-mono text-outline uppercase">2020 // 2022</span>
                    <h3 className="text-xl font-headline font-bold text-white">Junior Pentester</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Conducted OWASP Top 10 vulnerability assessments for e-commerce platforms. Assisted in the development of internal automated scanning tools.</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-surface-bright rounded text-white/70">PENTEST_INIT</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-surface-bright rounded text-white/70">OWASP_TOP10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 py-24 text-center">
          <div className="p-12 bg-gradient-to-br from-surface-container-low to-surface-container-highest rounded-2xl border border-primary/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,245,255,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <h2 className="text-3xl md:text-5xl font-headline font-black uppercase text-white mb-6 bg-transparent relative z-10">Ready to fortify your vision?</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-10 text-lg relative z-10">Currently accepting high-impact projects for Q4. Let's discuss your architectural requirements.</p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-on-primary font-label font-bold rounded-md hover:scale-105 transition-transform">
                INITIALIZE_CONTACT
              </button>
              <button className="px-8 py-4 border border-primary/40 text-primary font-label font-bold rounded-md hover:bg-primary/10 transition-all">
                DOWNLOAD_CV.PDF
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
