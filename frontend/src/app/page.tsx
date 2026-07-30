import { BrainCircuit, Activity, Shield, Terminal, ArrowRight, Sparkles, Zap, ChevronRight, BarChart3, Lock, Eye, CloudLightning } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 relative overflow-hidden flex flex-col font-sans selection:bg-indigo-500/30">
      
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[150px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      </div>
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <BrainCircuit className="w-6 h-6 text-white" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">KubeSage</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-300">
            <Link href="#features" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Features</Link>
            <Link href="#how-it-works" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Platform</Link>
            <Link href="#pricing" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Pricing</Link>
            <Link href="#docs" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Docs</Link>
          </nav>
          <div className="flex items-center gap-6">
            <button className="text-sm font-semibold text-slate-300 hover:text-white transition-colors hidden md:block">
              Sign in
            </button>
            <button className="text-sm font-bold bg-white text-black px-5 py-2.5 rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-2 group">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-40 pb-20 px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Version Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-500/10 text-sm font-semibold mb-8 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:bg-indigo-500/20 transition-colors cursor-pointer group">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-indigo-200">KubeSage AI Copilot 2.0 is live</span>
          <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter max-w-5xl mb-8 leading-[1.1]">
          The Intelligent Operating System for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
             Kubernetes Environments
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium">
          Eliminate downtime and streamline operations. KubeSage uses advanced LLMs to proactively diagnose, explain, and resolve complex cluster issues.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-24">
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-105 transition-all w-full sm:w-auto">
            <Terminal className="w-5 h-5" />
            Install via Helm
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1e293b] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#334155] border border-slate-700 transition-all w-full sm:w-auto">
            Book a Demo
          </button>
        </div>

        {/* Stunning App Mockup */}
        <div className="w-full max-w-6xl mx-auto relative group">
          {/* Mockup Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-[#0f172a]/90 backdrop-blur-2xl overflow-hidden shadow-2xl transform-gpu rotate-x-[2deg] hover:rotate-x-0 transition-transform duration-700 scale-95 group-hover:scale-100">
            
            {/* Fake Window Header */}
            <div className="h-14 bg-[#020617]/50 border-b border-white/5 flex items-center px-6 gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="mx-auto flex items-center gap-2 bg-black/40 px-6 py-1.5 rounded-full text-xs text-slate-400 font-mono border border-white/5">
                <Lock className="w-3 h-3 text-emerald-400" />
                https://kubesage.internal/dashboard
              </div>
            </div>
            
            {/* Mockup Body */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[url('https://transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
              
              {/* Left Column - Live Telemetry */}
              <div className="lg:col-span-4 space-y-6">
                <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 backdrop-blur-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl" />
                   <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-emerald-400" />
                      Cluster Health
                   </h3>
                   <div className="flex items-end gap-4 mb-6">
                      <span className="text-5xl font-black text-emerald-400">98%</span>
                      <span className="text-sm text-slate-400 mb-1">Optimal</span>
                   </div>
                   <div className="space-y-4">
                     {[
                       { label: 'CPU Usage', val: '42%', color: 'bg-emerald-400' },
                       { label: 'Memory', val: '76%', color: 'bg-amber-400' },
                       { label: 'Network I/O', val: '2.4GB/s', color: 'bg-indigo-400' }
                     ].map((stat, i) => (
                       <div key={i} className="flex flex-col gap-1.5">
                         <div className="flex justify-between text-xs font-semibold text-slate-300">
                           <span>{stat.label}</span>
                           <span>{stat.val}</span>
                         </div>
                         <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                           <div className={`h-full ${stat.color} rounded-full`} style={{ width: stat.val.replace(/GB\/s/,'') }} />
                         </div>
                       </div>
                     ))}
                   </div>
                </div>

                <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 backdrop-blur-sm">
                   <h3 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Active Alerts</h3>
                   <div className="space-y-3">
                     <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <Zap className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-amber-200">High Pod Eviction Rate</p>
                          <p className="text-xs text-amber-200/70 mt-1">Worker node pool scaling delayed.</p>
                        </div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Right Column - AI Copilot */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="flex-1 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20 p-6 relative overflow-hidden flex flex-col">
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/20 blur-[80px]" />
                  
                  <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                     <div className="flex items-center gap-3">
                       <div className="p-2 bg-indigo-500/20 rounded-lg">
                         <Sparkles className="w-5 h-5 text-indigo-400" />
                       </div>
                       <span className="font-bold text-lg">AI Resolution Copilot</span>
                     </div>
                     <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-slate-300">Session ID: kb-892x</span>
                  </div>

                  <div className="space-y-6 flex-1">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
                        <Terminal className="w-4 h-4 text-indigo-300" />
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 text-sm">
                        <p className="text-slate-200 font-mono">Why did the payment service latency spike to 4s in the last 10 minutes?</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg">
                        <BrainCircuit className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-indigo-500/10 p-5 rounded-2xl rounded-tr-none border border-indigo-500/20 text-sm w-full max-w-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                        <p className="text-slate-200 mb-3 leading-relaxed">
                          I correlated the latency spike with a sudden drop in available Redis connections. The <code className="bg-black/30 px-1.5 py-0.5 rounded text-indigo-300">payment-service</code> pod logs show `ConnectionPoolExhausted` errors.
                        </p>
                        <div className="p-3 bg-black/30 rounded-xl border border-white/5">
                          <p className="text-xs font-semibold text-emerald-400 mb-2">Recommended Action</p>
                          <p className="text-slate-300 mb-3">Scale up the Redis connection pool size in ConfigMap from 50 to 150.</p>
                          <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                            <CloudLightning className="w-4 h-4" />
                            Apply Fix Automatically
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="py-32 px-6 relative z-10" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Superpowers for DevOps</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">Stop writing bash scripts. Let AI manage the complexity of your distributed systems.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/50 hover:bg-white/[0.04] transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Conversational Ops</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Query logs, metrics, and configurations using plain English. Get direct answers instead of a list of dashboards to check.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 hover:bg-white/[0.04] transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Root Cause Analysis</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Automatically trace issues across microservices. KubeSage connects the dots between network drops, CPU spikes, and application logs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/50 hover:bg-white/[0.04] transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Proactive Healing</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Catch configuration drifts and security vulnerabilities before deployment, with auto-remediation scripts generated on the fly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
