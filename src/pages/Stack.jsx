export default function Stack() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-[1440px] mx-auto min-h-screen">
        {/* Header Section */}
        <header className="mb-20 relative">
            <div className="absolute -top-12 -left-8 text-[10px] font-mono text-primary/30 tracking-[0.5em] select-none">SYSTEM_PROTOCOL_v2.4.0</div>
            <div className="flex flex-col gap-2">
                <h1 className="text-7xl font-headline font-bold tracking-tighter text-on-surface">
                    CORE_<span className="text-primary">ARSENAL</span>
                </h1>
                <p className="text-on-surface-variant max-w-2xl text-lg font-light leading-relaxed">
                    A comprehensive technical dossier detailing structural proficiency across full-stack ecosystems, low-level optimization, and offensive security frameworks.
                </p>
            </div>
            <div className="mt-8 flex gap-6 items-center">
                <div className="flex items-center gap-2 px-3 py-1 bg-surface-bright rounded text-[10px] font-mono text-primary border border-primary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    UPLINK_STABLE
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-surface-bright rounded text-[10px] font-mono text-secondary border border-secondary/20">
                    ENCRYPTION_AES_256
                </div>
            </div>
        </header>

        {/* Skill Cards Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="glass-panel p-6 rounded-xl border border-outline-variant/15 flex flex-col gap-6 group hover:border-primary/40 transition-all duration-500">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-primary mb-1">MODULE_01</span>
                        <h3 className="text-xl font-headline font-bold tracking-tight text-on-surface">MERN_STACK</h3>
                    </div>
                    <span className="material-symbols-outlined text-primary text-3xl">layers</span>
                </div>
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-mono">
                            <span className="text-on-surface-variant">EFFICIENCY</span>
                            <span className="text-primary">94%</span>
                        </div>
                        <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[94%] shadow-[0_0_8px_rgba(143,245,255,0.5)]"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">MongoDB</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">Express</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">React_JS</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">Node_JS</span>
                    </div>
                </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-outline-variant/15 flex flex-col gap-6 group hover:border-secondary/40 transition-all duration-500">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-secondary mb-1">MODULE_02</span>
                        <h3 className="text-xl font-headline font-bold tracking-tight text-on-surface">JAVA_ECOSYSTEM</h3>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-3xl">coffee</span>
                </div>
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-mono">
                            <span className="text-on-surface-variant">THROUGHPUT</span>
                            <span className="text-secondary">88%</span>
                        </div>
                        <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-secondary w-[88%] shadow-[0_0_8px_rgba(172,137,255,0.5)]"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">Spring_Boot</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">JVM_Optim</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">Hibernate</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">Microservices</span>
                    </div>
                </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-outline-variant/15 flex flex-col gap-6 group hover:border-tertiary/40 transition-all duration-500">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-tertiary mb-1">MODULE_03</span>
                        <h3 className="text-xl font-headline font-bold tracking-tight text-on-surface">LOW_LEVEL_DEV</h3>
                    </div>
                    <span className="material-symbols-outlined text-tertiary text-3xl">memory</span>
                </div>
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-mono">
                            <span className="text-on-surface-variant">PRECISION</span>
                            <span className="text-tertiary">91%</span>
                        </div>
                        <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-tertiary w-[91%] shadow-[0_0_8px_rgba(0,236,59,0.5)]"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">C++_System</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">Embedded_C</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">RTOS</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">Asm_x86</span>
                    </div>
                </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-outline-variant/15 flex flex-col gap-6 group hover:border-error/40 transition-all duration-500">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-error mb-1">MODULE_04</span>
                        <h3 className="text-xl font-headline font-bold tracking-tight text-on-surface">CYBER_SECURITY</h3>
                    </div>
                    <span className="material-symbols-outlined text-error text-3xl">policy</span>
                </div>
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-mono">
                            <span className="text-on-surface-variant">INTEGRITY</span>
                            <span className="text-error">85%</span>
                        </div>
                        <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-error w-[85%] shadow-[0_0_8px_rgba(255,113,108,0.5)]"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">Pentesting</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">Net_Sec</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">BurpSuite</span>
                        <span className="px-2 py-1 bg-surface-bright text-[10px] font-mono text-on-surface-variant rounded border border-outline-variant/10">Kali_Linux</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Utility Belt Section */}
        <section className="mt-24">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <span className="text-[10px] font-mono text-primary-fixed-dim uppercase tracking-[0.3em]">Support_Systems</span>
                    <h2 className="text-4xl font-headline font-bold tracking-tight mt-2">UTILITY_BELT</h2>
                </div>
                <span className="text-[10px] font-mono text-on-surface-variant bg-surface-container-high px-4 py-1.5 rounded-full border border-outline-variant/10">SYSTEM_ACCESS: GRANTED</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center text-center group hover:bg-surface-container-highest transition-all duration-300">
                    <span className="material-symbols-outlined text-4xl text-primary/60 group-hover:text-primary transition-colors mb-4">terminal</span>
                    <h4 className="font-headline font-medium text-lg text-on-surface">Linux_Shell</h4>
                    <p className="text-[11px] font-mono text-on-surface-variant mt-2">Bash / Zsh Scripting</p>
                </div>
                <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center text-center group hover:bg-surface-container-highest transition-all duration-300">
                    <span className="material-symbols-outlined text-4xl text-primary/60 group-hover:text-primary transition-colors mb-4">dock</span>
                    <h4 className="font-headline font-medium text-lg text-on-surface">Docker_Containers</h4>
                    <p className="text-[11px] font-mono text-on-surface-variant mt-2">Orchestration &amp; DevOps</p>
                </div>
                <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center text-center group hover:bg-surface-container-highest transition-all duration-300">
                    <span className="material-symbols-outlined text-4xl text-primary/60 group-hover:text-primary transition-colors mb-4">cloud_done</span>
                    <h4 className="font-headline font-medium text-lg text-on-surface">AWS_Cloud</h4>
                    <p className="text-[11px] font-mono text-on-surface-variant mt-2">S3 / EC2 / Lambda</p>
                </div>
                <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center text-center group hover:bg-surface-container-highest transition-all duration-300">
                    <span className="material-symbols-outlined text-4xl text-primary/60 group-hover:text-primary transition-colors mb-4">account_tree</span>
                    <h4 className="font-headline font-medium text-lg text-on-surface">Git_Ver_Control</h4>
                    <p className="text-[11px] font-mono text-on-surface-variant mt-2">CI/CD Workflows</p>
                </div>
            </div>
        </section>

        {/* Dynamic Visualization Placeholder */}
        <section className="mt-24 h-[400px] w-full relative overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-lowest flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#8ff5ff_0%,_transparent_50%)] blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,_#ac89ff_0%,_transparent_50%)] blur-3xl"></div>
            </div>
            <div className="z-10 text-center flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-6xl text-primary/40 animate-pulse">analytics</span>
                <div className="space-y-1">
                    <h3 className="text-2xl font-headline font-bold tracking-widest uppercase">Real-Time_Architecture_Analysis</h3>
                    <p className="font-mono text-xs text-on-surface-variant tracking-widest">VISUALIZING_SYSTEM_COMPLEXITY_COEFFICIENT: 0.984</p>
                </div>
                <button className="mt-6 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold text-on-primary-container text-sm tracking-widest hover:opacity-90 transition-opacity">
                    INITIALIZE_DEEP_SCAN
                </button>
            </div>
            <div className="absolute bottom-4 right-6 font-mono text-[10px] text-primary/40">
                X: 142.42 | Y: 940.11 | Z: 0.003
            </div>
        </section>
    </main>
  );
}
