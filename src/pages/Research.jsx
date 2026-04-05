export default function Research() {
  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative px-8 pt-24 pb-12 overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent"></div>
          <div className="w-full h-full scanline text-primary"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              System Status: Monitoring Intelligence Feeds
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface tracking-tighter mb-6 leading-none">
            CENTRAL_<span className="text-primary glow-cyan">INTEL</span>
          </h1>
          <p className="max-w-2xl text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
            A repository of high-level cybersecurity research, architectural deep-dives, and real-time threat
            intelligence designed for the digital avant-garde.
          </p>
        </div>
      </section>

      {/* Featured Intelligence */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            {/* Glass Container */}
            <div className="glass-panel border border-outline-variant/15 rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-2xl transition-all duration-500 hover:border-primary/30">
              <div className="lg:w-3/5 p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="bg-surface-bright text-primary font-mono text-[10px] px-3 py-1 rounded tracking-widest border border-primary/20">
                    REPORT // 0XFA2B4
                  </span>
                  <span className="text-on-surface-variant font-mono text-[10px] tracking-widest">
                    PUBLISHED: OCT 14. 2024
                  </span>
                  <span className="text-secondary font-mono text-[10px] tracking-widest">
                    [CRITICAL_PRIORITY]
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 text-on-surface leading-tight">
                  Analyzing Zero-Day Vulnerabilities in MERN Architectures
                </h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed max-w-xl">
                  An exhaustive architectural audit investigating the persistence layer vulnerabilities
                  within modern full-stack environments. This research uncovers specific vectors in
                  document-database injection and React state manipulation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-on-primary font-headline font-bold text-sm tracking-widest uppercase rounded-md hover:scale-[1.02] active:scale-95 transition-all">
                    Access Dossier
                  </button>
                  <button className="px-6 py-3 border border-primary/20 text-primary font-headline font-bold text-sm tracking-widest uppercase rounded-md hover:bg-primary/10 transition-all">
                    View Source
                  </button>
                </div>
              </div>
              <div className="lg:w-2/5 bg-surface-container-highest relative min-h-[300px]">
                {/* Visual Representation (Mock Code/Data) */}
                <div className="absolute inset-0 p-6 font-mono text-[11px] text-primary/60 overflow-hidden leading-tight bg-[#050505]">
                  <div className="opacity-40">
                    <span className="text-secondary">const</span> exploitVector = (payload) =&gt; {'{'}<br />
                      <span className="text-tertiary">return</span> payload.map(chunk =&gt; {'{'}<br />
                        <span className="text-secondary">let</span> buffer = Buffer.from(chunk);<br />
                        <span className="text-tertiary">if</span> (buffer.entropy &gt; THRESHOLD) {'{'}<br />
                          <span className="text-error">// MALICIOUS_FRAG_DETECTED</span><br />
                          injectHeader(buffer);<br />
                        {'}'}<br />
                      {'}'});<br />
                    {'}'};
                  </div>
                  <div className="mt-8 border-t border-outline-variant/30 pt-4">
                    <div className="flex justify-between items-end h-24 gap-1">
                      <div className="bg-primary/20 w-full h-1/4"></div>
                      <div className="bg-primary/40 w-full h-2/4"></div>
                      <div className="bg-primary/60 w-full h-3/4"></div>
                      <div className="bg-primary/30 w-full h-1/2"></div>
                      <div className="bg-secondary/40 w-full h-5/6"></div>
                      <div className="bg-primary/20 w-full h-1/3"></div>
                    </div>
                    <p className="mt-2 text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Network_Entropy_Scan_004
                    </p>
                  </div>
                </div>
                <img
                  alt="Cybersecurity interface"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
                  data-alt="Close-up of a high-tech computer server rack with neon blue and purple indicator lights in a dark room with a moody cinematic atmosphere"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5u625DwoeHlQKBwINOhfbpN9PbdtgNoZ5G-cwcKRMhBcti-1Xu1UYCQ6CjPb69momvL7ZRWRRanObujqTD75SezQT7S5LLY4w6BjyFYbDjoIIVPOm2xjuO0sEMsAPzY3YYo947v63jrTc8ngWJ1fDGnu0GjI0vA0_Lv1Ca9FlCmsm37aQh3XeI3DsKRtpquRaidrwURt7Ev_-7JfsheR3TMi9Si_niXtpNamgBzl1ZmsnYbY463hlhCgWh6WmxoIPW4XnqVDiXXo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intel Feed Grid */}
      <section className="px-8 py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-sm font-mono text-primary tracking-[0.2em] uppercase mb-2">Extended_Feeds</h3>
              <h2 className="text-4xl font-headline font-bold text-on-surface">THREAT_GRID</h2>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="p-2 border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className="p-2 border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">list</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Intel Card 1 */}
            <div className="group bg-surface-container-highest/50 border border-outline-variant/15 p-8 rounded-lg hover:border-primary/40 transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[10px] text-primary border border-primary/20 px-2 py-0.5 rounded">
                  [SYSTEM_CORE]
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant">04.10.24</span>
              </div>
              <h4 className="text-xl font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                Securing Node.js Middleware Patterns
              </h4>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed flex-grow">
                A study on preventing middleware-based data leaks through custom validation pipelines and
                JWT-session isolation.
              </p>
              <button className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest hover:gap-4 transition-all">
                Read Dossier <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Intel Card 2 */}
            <div className="group bg-surface-container-highest/50 border border-outline-variant/15 p-8 rounded-lg hover:border-primary/40 transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[10px] text-secondary border border-secondary/20 px-2 py-0.5 rounded">
                  [NETWORK_INTEL]
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant">28.09.24</span>
              </div>
              <h4 className="text-xl font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                Kubernetes Network Policy Hardening
              </h4>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed flex-grow">
                Deep-dive into zero-trust architectures for internal cluster communications and pod
                isolation strategies.
              </p>
              <button className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest hover:gap-4 transition-all">
                Read Dossier <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Intel Card 3 */}
            <div className="group bg-surface-container-highest/50 border border-outline-variant/15 p-8 rounded-lg hover:border-primary/40 transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[10px] text-tertiary border border-tertiary/20 px-2 py-0.5 rounded">
                  [HIGH_LEVEL]
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant">12.09.24</span>
              </div>
              <h4 className="text-xl font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                The Future of AI-Driven Pentesting
              </h4>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed flex-grow">
                Exploring how LLMs are being leveraged to automate exploit discovery and patch remediation
                in real-time.
              </p>
              <button className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest hover:gap-4 transition-all">
                Read Dossier <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-3 px-8 py-4 border border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-primary/50 transition-all font-headline text-sm tracking-[0.2em] uppercase">
              Load_More_Sequences
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-8 py-24 relative overflow-hidden">
        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto glass-panel border border-outline-variant/10 p-12 md:p-20 text-center rounded-lg relative z-10">
          <span
            className="material-symbols-outlined text-5xl text-primary mb-8 glow-cyan"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            security
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface mb-6 tracking-tight">
            JOIN THE_SECURE_NETWORK
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto font-light">
            Receive classified updates, research abstracts, and architectural blueprints directly to your
            terminal.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              className="flex-grow bg-surface-container-highest border-none text-on-surface px-6 py-4 rounded-md focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/40 font-mono text-sm"
              placeholder="ACCESS_ID@PROTOCOL.NETWORK"
              type="email"
            />
            <button
              className="px-8 py-4 bg-primary text-on-primary font-headline font-bold tracking-widest uppercase rounded-md hover:brightness-110 active:scale-95 transition-all"
              type="submit"
            >
              Connect
            </button>
          </form>
          <div className="mt-8 flex justify-center items-center gap-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="w-24 h-8 bg-on-surface-variant/20 rounded"></div>
            <div className="w-24 h-8 bg-on-surface-variant/20 rounded"></div>
            <div className="w-24 h-8 bg-on-surface-variant/20 rounded"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
