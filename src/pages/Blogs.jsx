export default function Blogs() {
  return (
    <div className="flex min-h-screen pt-20">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-72 bg-zinc-950/20 backdrop-blur-md border-r border-white/5 flex-col pt-8 hidden xl:flex">
        <div className="px-8 mb-8">
          <h2 className="text-cyan-400 font-bold font-['JetBrains_Mono'] text-xs uppercase tracking-widest">
            STRATA_FILTERS
          </h2>
          <p className="text-on-surface-variant text-[10px] mt-1 font-['JetBrains_Mono']">
            Technical Categorization
          </p>
        </div>
        <nav className="flex-grow">
          <a
            className="flex items-center gap-4 text-cyan-400 bg-cyan-400/10 border-r-2 border-cyan-400 py-4 px-8 transition-all duration-200 ease-in-out"
            href="#"
          >
            <span className="material-symbols-outlined">layers</span>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest">MERN Stack</span>
          </a>
          <a
            className="flex items-center gap-4 text-zinc-500 py-4 px-8 hover:text-zinc-300 hover:bg-white/5 transition-all duration-200 ease-in-out"
            href="#"
          >
            <span className="material-symbols-outlined">security</span>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest">Cybersecurity</span>
          </a>
          <a
            className="flex items-center gap-4 text-zinc-500 py-4 px-8 hover:text-zinc-300 hover:bg-white/5 transition-all duration-200 ease-in-out"
            href="#"
          >
            <span className="material-symbols-outlined">memory</span>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest">Low-level</span>
          </a>
        </nav>
        <div className="px-8 mb-8">
          <button className="w-full py-3 bg-primary text-on-primary font-['Space_Grotesk'] font-bold text-xs tracking-widest rounded-md hover:shadow-[0_0_15px_rgba(143,245,255,0.4)] transition-all">
            SUBSCRIBE_FEED
          </button>
        </div>
        <div className="mt-auto border-t border-white/5 py-6">
          <a
            className="flex items-center gap-4 text-zinc-500 py-2 px-8 hover:text-zinc-300 text-xs font-['JetBrains_Mono']"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">description</span>
            Documentation
          </a>
          <a
            className="flex items-center gap-4 text-zinc-500 py-2 px-8 hover:text-zinc-300 text-xs font-['JetBrains_Mono']"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">help</span>
            Support
          </a>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-grow xl:ml-72 px-8 lg:px-16 pb-20">
        {/* Hero Spotlight */}
        <section className="mt-12 relative overflow-hidden rounded-xl h-[500px] flex items-center group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVDSRUSgjA7TC1hU9e1-aEpzE4yNavSDYBXZu36K-U-oMf0fNaMEd3uSH3hddFo3SAEv8_H3XIaE3kqhlAJfKceBe5tA6vpPKgnpE88DzrIbMShICYPJzrOepjkBzecImtJBf7kBGeFeMOZ15qhZDuKoT5BE9ql94bhCU3VLg7Sdk8CC7iRk1oMS9rDnYR2gwECbzseVHtW-97VH_k3sKA04BU9DHm24UU-jLNG2l8M1Fj1alc2qnu0RfNI7TrraRBl0nRIwzTo1Q')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
          <div className="relative z-10 max-w-2xl px-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary/20 text-primary px-3 py-1 text-[10px] font-['JetBrains_Mono'] rounded border border-primary/30 uppercase">
                FEATURED_INTEL
              </span>
              <span className="text-on-surface-variant text-[10px] font-['JetBrains_Mono']">
                ID: 4829-X
              </span>
            </div>
            <h1 className="font-headline text-6xl md:text-7xl font-bold text-on-surface tracking-tighter leading-none mb-6">
              ADVANCED_<span className="text-primary drop-shadow-[0_0_10px_rgba(143,245,255,0.3)]">MERN</span>_SECURITY
            </h1>
            <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
              Deep dive into secure architecture for the MERN stack. From JWT mitigation to NoSQL injection
              prevention in high-availability environments.
            </p>
            <button className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-on-primary font-bold rounded-md hover:scale-[1.02] transition-all">
              READ_DOSSIER
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </section>

        {/* Main Feed */}
        <div className="mt-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="font-headline text-3xl font-bold tracking-tighter uppercase">Recent_Transmissions</h3>
              <div className="h-1 w-20 bg-primary mt-2"></div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined p-2 border border-white/10 rounded cursor-pointer hover:bg-white/5">
                grid_view
              </span>
              <span className="material-symbols-outlined p-2 border border-white/10 rounded cursor-pointer hover:bg-white/5">
                list
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_20px_40px_rgba(143,245,255,0.08)]">
              <div className="aspect-video mb-6 rounded overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Digital authentication representation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmk29X5L-98cNJ9lC40nDdu7FJCQJuE1DdesCF3uvzXRUyYq7BBklCXig-2vbh2SiL2nXy9Gguj1nCov1PvuXW_QvhMrw5o-gJS5VIVrs_ae2ncFo4S5nb_18_MFptSW0vCbyxmeaLbA99CfRjeaQU1Z9mFdGsd7goaPMvNYJZV_7xjAWiDBgOKHQyFrL_W48jWinysSS8UuBeF1CXcpWbEsS08UIHMLiSyJlTEjp9KHZxLNm8Yp8azEUpSSBklDlGUJXa0jGuE30"
                />
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-['JetBrains_Mono'] text-secondary">
                  AUTH_BYPASS
                </div>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                Bypassing JWT Auth
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Exploring vulnerabilities in standard JSON Web Token implementations and how to harden them against theft.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[10px] font-['JetBrains_Mono'] text-on-surface-variant uppercase">Updated: 04.12.24</span>
                <span className="material-symbols-outlined text-primary text-sm">terminal</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_20px_40px_rgba(143,245,255,0.08)]">
              <div className="aspect-video mb-6 rounded overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Kubernetes cluster representation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK9Z3PX01t24hWv5TfJvhJMp_VPGMX55eymZUnVt_DTalio3xICQCnotOIwReDwg9Ov5_z9VPM6vCYMDGQVnbtTC70jaSN9E_6l7orIMV1EmQNvNSrP3VGbZquij2CUpEQQVn_BCuv2x65OChrz7P-LEzt1J01o367pSFNoZpvEW2JbKL4fDsAcaYCOTMBKlVEEM15BAZaPAN7Oum6pmbm-OCH5GtZFidHXVZt6Ygs-9MMsMjTZbH2oW4he2vgBblbArGdOAfo4zA"
                />
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-['JetBrains_Mono'] text-secondary">
                  HARDENING
                </div>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                Kubernetes Hardening
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Zero-trust architecture in K8s clusters. Implementing network policies and pod security standards effectively.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[10px] font-['JetBrains_Mono'] text-on-surface-variant uppercase">Updated: 04.10.24</span>
                <span className="material-symbols-outlined text-primary text-sm">terminal</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_20px_40px_rgba(143,245,255,0.08)]">
              <div className="aspect-video mb-6 rounded overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Network traffic visualization"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Y5Icu044K7k9cX9beeWqiyJ3xfrE3lIT7z00-N8bWQBdaLdXflpew58k8JcTeC895aZD7f7ejp0vtGgdpRuO2AN_Wke8_-mtGGMfFQw7UP5dhIxFA-G14vaqTnfSvyquVxaKYcm_M848WRYDEyyehmRCEo779VF9xWWQRYxj1cRtB9r7xD_2mfFBLHfK379kooQMf5uOkUceK71yQzsG0yAzvDiHUL6CeAfNSvjLh_nvfAUyMg3E0HWDurqBIoleHWuelX8XYRM"
                />
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-['JetBrains_Mono'] text-secondary">
                  EXFILTRATION
                </div>
              </div>
              <h4 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                DNS Tunneling Analysis
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Detecting and preventing data exfiltration via DNS protocols using machine learning patterns.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[10px] font-['JetBrains_Mono'] text-on-surface-variant uppercase">Updated: 04.08.24</span>
                <span className="material-symbols-outlined text-primary text-sm">terminal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Layout Content */}
        <section className="mt-32">
          <h3 className="font-headline text-2xl font-bold mb-10 tracking-widest uppercase text-on-surface-variant">
            System_Capabilities
          </h3>
          <div className="grid grid-cols-12 grid-rows-2 gap-6 h-[600px]">
            <div className="col-span-8 row-span-2 glass-card rounded-xl p-10 flex flex-col justify-end relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <span className="material-symbols-outlined text-[120px]">psychology</span>
              </div>
              <h4 className="font-headline text-4xl font-bold mb-4">THREAT_INTELLIGENCE</h4>
              <p className="text-on-surface-variant max-w-md text-lg">
                Our custom engine aggregates feeds from 40+ dark web monitors to provide real-time vulnerability forecasting.
              </p>
              <div className="mt-8 flex gap-4">
                <span className="bg-surface-bright px-4 py-2 rounded font-['JetBrains_Mono'] text-xs text-primary">
                  SCANNERS_ACTIVE
                </span>
                <span className="bg-surface-bright px-4 py-2 rounded font-['JetBrains_Mono'] text-xs text-secondary">
                  UPLOADING_METRICS...
                </span>
              </div>
            </div>
            <div className="col-span-4 glass-card rounded-xl p-8 border border-white/5 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4">hub</span>
              <h5 className="font-headline text-xl font-bold mb-2 uppercase">Global_Nodes</h5>
              <p className="text-on-surface-variant text-sm">34 Active deployment zones</p>
            </div>
            <div className="col-span-4 glass-card rounded-xl p-8 border border-white/5 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">terminal</span>
              <h5 className="font-headline text-xl font-bold mb-2 uppercase">CLI_Access</h5>
              <p className="text-on-surface-variant text-sm">Direct SSH integration enabled</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
