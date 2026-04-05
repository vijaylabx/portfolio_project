export default function Connect() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex-grow">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Content: Contact Form Section */}
        <div className="lg:col-span-8">
          <div className="mb-12">
            <span className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              Communication Portal
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-on-surface mb-6 glow-text">
              INITIATE <span className="text-secondary">CONTACT</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
              Secure line open for project inquiries, technical collaborations, or security consultations. Your data is
              processed through an encrypted interface.
            </p>
          </div>
          {/* Glassmorphism Form Panel */}
          <div className="glass-panel p-8 md:p-12 rounded-xl border border-outline-variant/15 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/20 pointer-events-none">
              ENC_TYPE: AES-256-GCM<br />
              TTL: 3600ms
            </div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-on-surface-variant ml-1">
                    Identity Name
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-md p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-on-surface-variant/30 font-mono"
                    placeholder="GHOST_USER"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-on-surface-variant ml-1">
                    Access Email
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-md p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-on-surface-variant/30 font-mono"
                    placeholder="user@encrypted.net"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-on-surface-variant ml-1">
                  Objective Subject
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    className="py-2 px-4 bg-surface-container border border-outline-variant/15 rounded text-xs font-mono text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all"
                    type="button"
                  >
                    PROJECT
                  </button>
                  <button
                    className="py-2 px-4 bg-surface-container border border-outline-variant/15 rounded text-xs font-mono text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all"
                    type="button"
                  >
                    AUDIT
                  </button>
                  <button
                    className="py-2 px-4 bg-surface-container border border-outline-variant/15 rounded text-xs font-mono text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all"
                    type="button"
                  >
                    RECRUIT
                  </button>
                  <button
                    className="py-2 px-4 bg-surface-container border border-outline-variant/15 rounded text-xs font-mono text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all"
                    type="button"
                  >
                    OTHER
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-on-surface-variant ml-1">
                  Payload Content
                </label>
                <textarea
                  className="w-full bg-surface-container-highest border-none rounded-md p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-on-surface-variant/30 resize-none font-mono"
                  placeholder="Construct your message here..."
                  rows="6"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-primary to-secondary text-on-primary font-bold rounded-md flex items-center justify-center gap-3 hover:shadow-[0_0_25px_rgba(143,245,255,0.4)] transition-all active:scale-[0.98]"
                  type="submit"
                >
                  <span className="font-headline tracking-widest uppercase">Send Intel</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Right Content: Side Info / Terminal Section */}
        <div className="lg:col-span-4 space-y-6">
          {/* Status Card */}
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[10px] uppercase text-on-surface-variant tracking-widest">
                Network Status
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tertiary-dim animate-pulse"></div>
                <span className="font-mono text-[10px] text-tertiary-dim uppercase">Live</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-surface-container-highest p-2 rounded">
                  <span className="material-symbols-outlined text-primary text-xl">security</span>
                </div>
                <div>
                  <div className="text-xs font-mono text-on-surface-variant uppercase mb-1">Secure Email</div>
                  <div className="text-sm font-mono text-on-surface">v.jay@cyber-intel.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-surface-container-highest p-2 rounded">
                  <span className="material-symbols-outlined text-secondary text-xl">schedule</span>
                </div>
                <div>
                  <div className="text-xs font-mono text-on-surface-variant uppercase mb-1">Response Time</div>
                  <div className="text-sm font-mono text-on-surface">Within 24 Cycles (Hours)</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-surface-container-highest p-2 rounded">
                  <span className="material-symbols-outlined text-tertiary text-xl">location_on</span>
                </div>
                <div>
                  <div className="text-xs font-mono text-on-surface-variant uppercase mb-1">Geospatial Origin</div>
                  <div className="text-sm font-mono text-on-surface">Bangalore, IN // Node 080</div>
                </div>
              </div>
            </div>
          </div>
          {/* Terminal-esque Info Card */}
          <div className="bg-[#000000] p-5 rounded-xl border border-primary/20 font-mono text-xs leading-relaxed space-y-2 overflow-hidden relative">
            <div className="text-primary/40 mb-3 border-b border-primary/10 pb-2 flex justify-between">
              <span>system_log_v4.2</span>
              <span>[ROOT]</span>
            </div>
            <div className="text-primary-dim">&gt; Initializing secure handshake...</div>
            <div className="text-on-surface-variant">&gt; Protocol: HTTPS/TLS 1.3</div>
            <div className="text-on-surface-variant">&gt; Key: Curve25519</div>
            <div className="text-tertiary-dim">&gt; Handshake verified.</div>
            <div className="text-on-surface-variant">&gt; Direct messaging enabled.</div>
            <div className="text-primary-dim">&gt; Awaiting user input_</div>
            {/* Decorative scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
          </div>
          {/* Map / Location Placeholder */}
          <div className="rounded-xl overflow-hidden grayscale opacity-60 hover:opacity-100 transition-opacity duration-700 h-48 border border-outline-variant/15 relative">
            <img
              className="w-full h-full object-cover"
              alt="Bangalore Map"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV3IUb6573Dtvet22yrEUFvl5ovLamS1nSYF0sliIDldoK65Dfeydz8iclWutEPIla96oge_xG4nzg0bBOx0SmaPZA7ID1W7eCtVfrfq1vJARtS2QuSPLf_YbTfzl-qZqzLScGjYVLxmBEs9_k4iWFqBo-jvcGdZaa_M2e4omPFTrM3af3aEAILxKyiBo64QTvpzo05E5SK6TcmCdBb6bRWiA2DdbPOvqj4Wx20MPE81yWIaJ9Gr87sHGqZ7gUGlxXaR3k0jGE7HA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary tracking-tighter">
              LAT: 12.9716° N<br />
              LONG: 77.5946° E
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
