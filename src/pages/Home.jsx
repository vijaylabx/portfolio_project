export default function Home() {
  return (
    <main className="pt-2">
        {/* Hero Section */}
        <section className="relative min-h-[750px] flex flex-col items-center justify-center px-6 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container/10 blur-[120px] rounded-full -z-10"></div>
            <div className="max-w-4xl w-full text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-primary">System Status: Active</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-on-surface leading-none">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-primary">Vijay</span>
                </h1>
                <div className="font-mono text-lg md:text-xl text-on-surface-variant flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                    <span className="text-primary">&gt;</span>
                    <span className="border-r-2 border-primary pr-1">Web Developer | MERN Stack | Cybersecurity | Pen Tester</span>
                </div>
                <p className="text-on-surface-variant max-w-xl mx-auto text-lg leading-relaxed">
                    Architecting secure digital experiences through the intersection of clean code and defensive engineering.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-on-primary font-headline font-bold uppercase tracking-widest rounded-md hover:scale-[1.02] transition-transform shadow-[0_10px_30px_rgba(143,245,255,0.3)]">
                        Initialize Project
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-primary/30 text-primary font-headline font-bold uppercase tracking-widest rounded-md hover:bg-primary/10 transition-all">
                        View Dossier
                    </button>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-surface-variant/40">
                <span className="font-mono text-[10px] uppercase tracking-widest">Scroll to decrypt</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
            </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-6 bg-surface-container-low relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all opacity-50"></div>
                        <div className="relative aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-outline-variant/20">
                            <img alt="Vijay"
                                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                                src="/images/myimages.jpeg" />
                        </div>
                        <div className="absolute bottom-6 -right-6 glass-card p-6 rounded-lg hidden md:block">
                            <div className="space-y-1">
                                <p className="font-mono text-[10px] text-primary uppercase">Current Protocol</p>
                                <p className="font-headline font-bold text-lg">Lead Security Architect</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="font-mono text-primary text-sm tracking-[0.2em] uppercase">// 01. Identity</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Crafting with Precision, Driven by <span className="text-secondary italic">Creativity</span>.</h2>
                        </div>
                        <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                            <p>
                                I build modern web applications with a strong focus on both development and cybersecurity. Using the  
                                <span className="text-on-surface font-semibold"> MERN stack</span>, I create fast, clean, and user-friendly 
                                interfaces while also identifying and securing potential vulnerabilities.
                            </p>
                            <p>
                                From pen-testing enterprise architectures to crafting seamless React interfaces, my goal is to deliver digital assets that are as resilient as they are beautiful.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div>
                                <h4 className="font-headline font-bold text-on-surface">Experience</h4>
                                <p className="font-mono text-sm text-primary">5+ Years Active</p>
                            </div>
                            <div>
                                <h4 className="font-headline font-bold text-on-surface">Vulnerabilities Patched</h4>
                                <p className="font-mono text-sm text-primary">120+ Secured</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Journey / Skills Section */}
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <span className="font-mono text-primary text-xs tracking-[0.3em] uppercase">CHRONOLOGY</span>
                    <h2 className="text-5xl md:text-6xl font-headline font-black uppercase tracking-tighter">Skill set Log</h2>
                </div>
                {/* MERN Stack */}
                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] timeline-line -translate-x-1/2 hidden md:block"></div>
                    <div className="space-y-16 relative">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                            <div className="w-full md:w-[45%] text-center md:text-right">
                                <div className="space-y-1 mb-4">
                                    <span className="font-mono text-primary text-[10px] uppercase tracking-widest">MASTERED // EXPERT</span>
                                    <h3 className="text-3xl font-headline font-bold">MERN Stack</h3>
                                    <p className="text-on-surface-variant text-sm font-mono uppercase">Full-Stack Engineering</p>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-primary/40 flex items-center justify-center shadow-[0_0_20px_rgba(143,245,255,0.2)]">
                                    <span className="material-symbols-outlined text-primary" data-icon="rocket_launch">rocket_launch</span>
                                </div>
                            </div>
                            <div className="w-full md:w-[45%]">
                                <div className="glass-card p-6 rounded-xl border-l-2 border-primary/30">
                                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                                        Architecting scalable React applications with robust Node/Express backends. Specialized in high-performance state management and real-time data synchronization.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">REACT_DOM</span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">NODE_SECURE</span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline"> Express.js</span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline"> MongoDB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Cyber Security */}

                        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-0">
                            <div className="w-full md:w-[45%] text-center md:text-left">
                                <div className="space-y-1 mb-4">
                                    <span className="font-mono text-secondary text-[10px] uppercase tracking-widest">ADVANCED // ACTIVE</span>
                                    <h3 className="text-3xl font-headline font-bold">Cyber Security</h3>
                                    <p className="text-on-surface-variant text-sm font-mono uppercase">Offensive &amp; Defensive</p>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-secondary/40 flex items-center justify-center shadow-[0_0_20px_rgba(172,137,255,0.2)]">
                                    <span className="material-symbols-outlined text-secondary" data-icon="security">security</span>
                                </div>
                            </div>
                            <div className="w-full md:w-[45%]">
                                <div className="glass-card p-6 rounded-xl border-r-2 border-secondary/30 text-right">
                                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                                        Conducting OWASP Top 10 vulnerability assessments. Implementing zero-trust architectures and custom middleware to reduce attack surfaces by up to 40%.
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-end">
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">PENTEST_INIT</span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">AUDIT_LOGS</span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">Application Security</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* JAVA */}

                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                            <div className="w-full md:w-[45%] text-center md:text-right">
                                <div className="space-y-1 mb-4">
                                    <span className="font-mono text-tertiary text-[10px] uppercase tracking-widest">PROFICIENT // SYSTEMS</span>
                                    <h3 className="text-3xl font-headline font-bold">Java</h3>
                                    <p className="text-on-surface-variant text-sm font-mono uppercase">Enterprise Logic</p>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-tertiary/40 flex items-center justify-center shadow-[0_0_20px_rgba(156,255,147,0.2)]">
                                    <span className="material-symbols-outlined text-tertiary" data-icon="coffee">coffee</span>
                                </div>
                            </div>
                            <div className="w-full md:w-[45%]">
                                <div className="glass-card p-6 rounded-xl border-l-2 border-tertiary/30">
                                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                                        Building resilient enterprise applications with a focus on multithreading, microservices, and secure transaction handling.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">Android Deve. </span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">SPRING_BOOT</span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">Big Data Technology</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* C AND C++ */}
                        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-0">
                            <div className="w-full md:w-[45%] text-center md:text-left">
                                <div className="space-y-1 mb-4">
                                    <span className="font-mono text-primary text-[10px] uppercase tracking-widest">FOUNDATIONAL // CORE</span>
                                    <h3 className="text-3xl font-headline font-bold">C++ / C</h3>
                                    <p className="text-on-surface-variant text-sm font-mono uppercase">Low-Level Operations</p>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-primary/40 flex items-center justify-center shadow-[0_0_20px_rgba(143,245,255,0.2)]">
                                    <span className="material-symbols-outlined text-primary" data-icon="memory">memory</span>
                                </div>
                            </div>
                            <div className="w-full md:w-[45%]">
                                <div className="glass-card p-6 rounded-xl border-r-2 border-primary/30 text-right">
                                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                                        Managing memory-critical environments and developing high-efficiency kernels for cryptographic applications and security tools.
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-end">
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">MEM_MANAGEMENT</span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">STD_LIB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                         {/* Python */}

                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                            <div className="w-full md:w-[45%] text-center md:text-right">
                                <div className="space-y-1 mb-4">
                                    <span className="font-mono text-tertiary text-[10px] uppercase tracking-widest">PROFICIENT // SYSTEMS</span>
                                    <h3 className="text-3xl font-headline font-bold">Python</h3>
                                    <p className="text-on-surface-variant text-sm font-mono uppercase">Red Hat Hacking</p>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-tertiary/40 flex items-center justify-center shadow-[0_0_20px_rgba(156,255,147,0.2)]">
                                    <span className="material-symbols-outlined text-tertiary" data-icon="coffee">coffee</span>
                                </div>
                            </div>
                            <div className="w-full md:w-[45%]">
                                <div className="glass-card p-6 rounded-xl border-l-2 border-tertiary/30">
                                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                                        Building scalable Python applications with a focus on concurrency, microservices, and secure data handling.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">Web Scripting</span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">Hacking</span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">AI & ML</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* DevOps & Cloud */}
                        
                        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-0">
                            <div className="w-full md:w-[45%] text-center md:text-left">
                                <div className="space-y-1 mb-4">
                                    <span className="font-mono text-primary text-[10px] uppercase tracking-widest">Deployment & Scaling</span>
                                    <h3 className="text-3xl font-headline font-bold">DevOps & Cloud</h3>
                                    <p className="text-on-surface-variant text-sm font-mono uppercase">Low-Level Operations</p>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-primary/40 flex items-center justify-center shadow-[0_0_20px_rgba(143,245,255,0.2)]">
                                    <span className="material-symbols-outlined text-primary" data-icon="memory">memory</span>
                                </div>
                            </div>
                            <div className="w-full md:w-[45%]">
                                <div className="glass-card p-6 rounded-xl border-r-2 border-primary/30 text-right">
                                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                                       Deploying and managing scalable applications with CI/CD, Docker, and cloud platforms while ensuring security and high availability.
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-end">
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">CI/CD</span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">Monitoring</span>
                                        <span className="px-2 py-1 bg-surface-bright text-[9px] font-mono rounded text-outline">Vercel/AWS</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Skills Section - Bento Grid */}
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <span className="font-mono text-primary text-sm tracking-[0.2em] uppercase">// 02. Arsenal</span>
                        <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Technical Proficiency</h2>
                    </div>
                    <p className="text-on-surface-variant max-w-md font-mono text-xs uppercase tracking-widest leading-loose">
                        A curated selection of tools and languages deployed in high-performance environments.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4">
                    <div className="md:col-span-2 md:row-span-1 glass-card p-8 rounded-xl flex flex-col justify-between group hover:border-primary/40 transition-all">
                        <div className="flex justify-between items-start">
                            <span className="material-symbols-outlined text-4xl text-primary" data-icon="layers">layers</span>
                            <span className="font-mono text-[10px] text-outline">CORE_STACK</span>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-headline font-bold uppercase">MERN Mastery</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-surface-bright rounded text-[10px] font-mono uppercase">MongoDB</span>
                                <span className="px-3 py-1 bg-surface-bright rounded text-[10px] font-mono uppercase">Express</span>
                                <span className="px-3 py-1 bg-surface-bright rounded text-[10px] font-mono uppercase">React</span>
                                <span className="px-3 py-1 bg-surface-bright rounded text-[10px] font-mono uppercase">Node.js</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 md:row-span-1 bg-secondary-container/5 border border-secondary/10 p-8 rounded-xl flex flex-col justify-between group hover:bg-secondary-container/10 transition-all">
                        <span className="material-symbols-outlined text-4xl text-secondary" data-icon="security">security</span>
                        <div className="space-y-2">
                            <h3 className="text-xl font-headline font-bold uppercase">Pentesting</h3>
                            <p className="text-sm text-on-surface-variant">Offensive security &amp; audit strategies.</p>
                        </div>
                    </div>
                    <div className="md:col-span-1 md:row-span-2 glass-card p-8 rounded-xl border-l-4 border-l-tertiary flex flex-col justify-between">
                        <div className="space-y-6">
                            <h3 className="text-xl font-headline font-bold uppercase transform -rotate-90 origin-left mt-24 whitespace-nowrap">Cloud Infrastructure</h3>
                            <p className="text-sm text-on-surface-variant">Deploying resilient systems on AWS &amp; Azure.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full bg-surface-bright h-1 rounded-full overflow-hidden">
                                <div className="bg-tertiary h-full w-[85%]"></div>
                            </div>
                            <span className="font-mono text-[10px] text-tertiary">85% OPTIMIZED</span>
                        </div>
                    </div>
                    <div className="md:col-span-1 md:row-span-1 glass-card p-8 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:bg-surface-bright transition-all">
                        <span className="material-symbols-outlined text-3xl" data-icon="terminal">terminal</span>
                        <h3 className="text-lg font-headline font-bold uppercase">Python / Go</h3>
                    </div>
                    <div className="md:col-span-2 md:row-span-1 glass-card p-8 rounded-xl flex items-center justify-between group">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-headline font-bold uppercase">Cyber Forensics</h3>
                            <p className="text-on-surface-variant text-sm">Investigating digital footprints and breach patterns.</p>
                        </div>
                        <div className="w-24 h-24 relative">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle className="text-surface-bright" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="4"></circle>
                                <circle className="text-primary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="60" strokeWidth="4"></circle>
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center font-mono text-xs">75%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Project Preview / Action Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-transparent to-surface-container-low">
            <div className="max-w-7xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight uppercase">Ready to initiate?</h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
                        Currently accepting select projects for Q3 2026. Let's build something that stands the test of both users and threats.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <a className="flex items-center gap-3 px-8 py-4 bg-surface-container-highest border border-outline-variant/30 rounded hover:border-primary transition-all group" href="#">
                        <span className="material-symbols-outlined group-hover:text-primary" data-icon="code">code</span>
                        <span className="font-headline font-bold uppercase tracking-widest text-sm"> <a href="https://github.com/vijaylabx/portfolio_project">View GitHub Source</a> </span>
                    </a>
                    <a className="flex items-center gap-3 px-8 py-4 bg-surface-container-highest border border-outline-variant/30 rounded hover:border-secondary transition-all group" href="#">
                        <span className="material-symbols-outlined group-hover:text-secondary" data-icon="send">send</span>
                        <span className="font-headline font-bold uppercase tracking-widest text-sm"><a href="https://www.linkedin.com/in/vijay-kumar-334911270"> Linkedin Connection</a></span>
                    </a>
                </div>
            </div>
        </section>
    </main>
  );
}
