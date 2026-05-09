import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  Milestone, 
  Menu, 
  X, 
  ExternalLink, 
  ChevronRight,
  Target,
  Rocket,
  Globe,
  GraduationCap,
  HeartPulse,
  BrainCircuit,
  TrendingUp,
  Cpu,
  Search,
  Filter
} from 'lucide-react';
import { COMPANY_INFO, PILLARS, VENTURES, VALUES, ETHICS_COMMITMENTS, ROADMAP, Venture, Pillar } from './data';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

type ViewType = 'overview' | 'pillars' | 'ventures' | 'ethics' | 'founder';

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const menuItems = [
    { id: 'overview', name: 'Dashboard Overview', icon: BarChart3 },
    { id: 'pillars', name: 'Core Pillars', icon: Target },
    { id: 'ventures', name: 'AI Ventures', icon: Rocket },
    { id: 'ethics', name: 'Values & Ethics', icon: ShieldCheck },
    { id: 'founder', name: 'Founder & Vision', icon: Milestone },
  ];

  return (
    <div className="flex h-screen bg-[#030409] font-sans overflow-hidden text-slate-200">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className={`fixed inset-y-0 left-0 w-64 bg-[#080911] border-r border-white/5 z-50 transition-all duration-300 transform lg:translate-x-0 lg:static lg:block print:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-blue flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-blue-500/20">
                A
              </div>
              <div>
                <h1 className="font-display font-bold text-lg leading-tight tracking-tight text-white">ATSFY</h1>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Ecosystem Intel</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id as ViewType);
                  if (sidebarOpen) setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  activeView === item.id 
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                }`}
              >
                <item.icon className={`w-5 h-5 ${activeView === item.id ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                <span className="font-medium text-sm">{item.name}</span>
                {activeView === item.id && (
                  <motion.div layoutId="nav-indicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                )}
              </button>
            ))}

            <div className="pt-6 pb-2 px-4">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">The Pillars</p>
            </div>
            {PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setActiveView('pillars');
                  setSelectedPillar(p.id);
                  if (sidebarOpen) setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 group ${
                  selectedPillar === p.id && activeView === 'pillars'
                    ? 'text-white bg-white/5'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${
                  p.color === 'purple' ? 'bg-purple-500' : p.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                }`} />
                <span className="text-xs font-medium">{p.name}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-white/5 bg-black/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold">
                  AP
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold truncate text-white">Ayan Pal</p>
                  <p className="text-[10px] text-slate-500 truncate">Founder</p>
                </div>
              </div>
              <div className="px-2 space-y-1">
                <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">Confidential Report</p>
                <p className="text-[9px] text-slate-700">© 2026 ATSfy Tech. For Information Purposes Only.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative h-full">        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 backdrop-blur-xl bg-[#030409]/80 fixed top-0 right-0 left-0 lg:left-64 z-30 print:hidden">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="p-2 hover:bg-white/5 rounded-lg lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-display font-medium text-white capitalize">{activeView.replace('-', ' ')}</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               Live System Status: Optimal
            </div>
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300 hover:bg-white/10 hover:text-white transition-all"
              title="Generate PDF Report"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden md:inline">Export Report</span>
            </button>
            <button className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto pt-16 scroll-smooth print:pt-0 print:overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 lg:p-8 max-w-7xl mx-auto print:p-0 print:max-w-none"
            >
              {activeView === 'overview' && <OverviewView />}
              {activeView === 'pillars' && <PillarsView selectedId={selectedPillar} onSelect={setSelectedPillar} />}
              {activeView === 'ventures' && <VenturesView />}
              {activeView === 'ethics' && <EthicsView />}
              {activeView === 'founder' && <FounderVisionView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function OverviewView() {
  const chartData = PILLARS.map(p => ({
    name: p.name.split(' ')[0],
    count: p.ventures.length,
    color: p.color
  }));

  const pieData = [
    { name: 'People', value: 3, color: '#A855F7' },
    { name: 'Career', value: 3, color: '#3B82F6' },
    { name: 'Impact', value: 3, color: '#22C55E' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-display font-bold text-white tracking-tight">Ecosystem Intelligence</h1>
          <p className="text-slate-400 max-w-2xl">{COMPANY_INFO.mission}</p>
        </div>
        <div className="flex gap-3">
          <div className="glass-card px-4 py-3 flex flex-col gap-1 min-w-[120px]">
             <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Founded</span>
             <span className="text-xl font-display font-bold text-white tracking-tight">{COMPANY_INFO.founded}</span>
          </div>
          <div className="glass-card px-4 py-3 flex flex-col gap-1 min-w-[120px]">
             <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Origin</span>
             <span className="text-xl font-display font-bold text-white tracking-tight">{COMPANY_INFO.origin}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total AI Ventures" value={COMPANY_INFO.venturesCount} icon={Rocket} color="blue" />
        <StatCard title="Core Ecosystem Pillars" value={COMPANY_INFO.pillarsCount} icon={Target} color="purple" />
        <StatCard title="Tech Hubs (Origin)" value="NE India" icon={Globe} color="green" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 space-y-6">
          <h3 className="font-display font-bold text-lg text-white">Venture Distribution</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px', color: '#f8fafc' }}
                  cursor={{ fill: '#ffffff0a' }}
                />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color === 'purple' ? '#A855F7' : entry.color === 'blue' ? '#3B82F6' : '#22C55E'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col">
          <h3 className="font-display font-bold text-lg text-white mb-6">Pillar Weightage</h3>
          <div className="flex-1 flex flex-col md:flex-row items-center gap-8">
            <div className="h-[240px] w-full md:w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              {PILLARS.map((p) => (
                <div key={p.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${p.color === 'purple' ? 'bg-purple-500' : p.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'}`} />
                    <span className="text-sm font-medium text-slate-300">{p.name}</span>
                  </div>
                  <span className="text-sm font-mono text-slate-500">33.3%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-bold text-xl text-white">Strategic Pillars</h3>
          <button className="text-xs text-blue-400 hover:text-blue-300 font-medium">View Architecture →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <motion.div 
              key={pillar.id}
              whileHover={{ y: -5 }}
              className="glass-card p-6 flex flex-col border-t-2"
              style={{ borderTopColor: pillar.color === 'purple' ? '#A855F7' : pillar.color === 'blue' ? '#3B82F6' : '#22C55E' }}
            >
              <h4 className="font-display font-bold text-lg text-white mb-2">{pillar.name}</h4>
              <p className="text-xs text-slate-400 mb-6 flex-1">{pillar.description}</p>
              <div className="space-y-2">
                {pillar.ventures.map((vId) => {
                  const v = VENTURES.find(ven => ven.id === vId);
                  return (
                    <div key={vId} className="flex items-center gap-2 text-[10px] font-medium text-slate-300 bg-white/5 py-1.5 px-2.5 rounded-lg border border-white/5">
                       <Rocket className="w-3 h-3 opacity-50" />
                       {v?.name}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PillarsView({ selectedId, onSelect }: { selectedId: string | null, onSelect: (id: string) => void }) {
  const currentPillar = PILLARS.find(p => p.id === (selectedId || 'people-learning'))!;
  
  return (
    <div className="space-y-8">
      <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none">
        {PILLARS.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              currentPillar.id === p.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className={`p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden`}
               style={{ background: currentPillar.color === 'purple' ? 'linear-gradient(135deg, #A855F7 0%, #6366F1 100%)' : currentPillar.color === 'blue' ? 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)' : 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)' }}>
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl w-fit">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-3 relative z-10">
              <h1 className="text-3xl font-display font-bold text-white leading-tight">{currentPillar.name}</h1>
              <p className="text-white/80 text-sm leading-relaxed">{currentPillar.description}</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="glass-card p-6 space-y-4">
            <h3 className="font-display font-bold text-white">Pillar Intelligence</h3>
            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400">Total Ventures</span>
                <span className="text-white font-mono">{currentPillar.ventures.length}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400">Readiness State</span>
                <span className="text-green-400 font-mono">Live</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-400">Impact Score</span>
                <span className="text-white font-mono">9.8/10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3">
              <Rocket className="w-5 h-5 text-blue-400" />
              <h2 className="font-display font-bold text-white">Active AI Ventures</h2>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{currentPillar.ventures.length} Platforms</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentPillar.ventures.map((vId) => {
              const v = VENTURES.find(ven => ven.id === vId)!;
              return (
                <div key={v.id} className="glass-card p-5 group flex flex-col gap-4 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/10">
                      {v.id === 'education-ai' && <GraduationCap className="w-5 h-5" />}
                      {v.id === 'knowledge-enabler' && <BrainCircuit className="w-5 h-5" />}
                      {v.id === 'ashasethu' && <HeartPulse className="w-5 h-5" />}
                      {v.id === 'atsfy-core' && <Briefcase className="w-5 h-5" />}
                      {v.id === 'ai-career-guide' && <TrendingUp className="w-5 h-5" />}
                      {v.id === 'finance-xai' && <BarChart3 className="w-5 h-5" />}
                      {v.id === 'startuplens' && <Search className="w-5 h-5" />}
                      {v.id === 'pitch-deck-pro' && <Cpu className="w-5 h-5" />}
                      {v.id === 'green-to-gold' && <Globe className="w-5 h-5" />}
                    </div>
                    <a href={v.liveUrl} target="_blank" rel="noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                      <ExternalLink className="w-4 h-4 text-slate-400 hover:text-white" />
                    </a>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors">{v.name}</h3>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wide font-bold">{v.category}</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{v.tagline}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {v.targetUsers.slice(0, 2).map((user, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-slate-500">{user}</span>
                    ))}
                    {v.targetUsers.length > 2 && <span className="text-[9px] text-slate-600">+{v.targetUsers.length - 2} more</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function VenturesView() {
  const [filter, setFilter] = useState('all');

  const filteredVentures = filter === 'all' 
    ? VENTURES 
    : VENTURES.filter(v => v.pillarId === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">Active Venture Directory</h1>
          <p className="text-slate-400 max-w-xl">Deep exploration of our nine specialized AI platforms built for impact.</p>
        </div>
        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${filter === 'all' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            All Ventures
          </button>
          {PILLARS.map(p => (
            <button 
              key={p.id}
              onClick={() => setFilter(p.id)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${filter === p.id ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
            >
              {p.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredVentures.map((v) => (
          <motion.div 
            layout
            key={v.id} 
            className="glass-card p-6 md:p-8 flex flex-col lg:flex-row gap-8 hover:bg-white/[0.07] transition-all duration-300"
          >
            <div className="lg:w-1/3 space-y-4">
              <div className="flex items-center gap-3">
                 <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/10">
                   {v.id === 'education-ai' && <GraduationCap className="w-6 h-6" />}
                   {v.id === 'knowledge-enabler' && <BrainCircuit className="w-6 h-6" />}
                   {v.id === 'ashasethu' && <HeartPulse className="w-6 h-6" />}
                   {v.id === 'atsfy-core' && <Briefcase className="w-6 h-6" />}
                   {v.id === 'ai-career-guide' && <TrendingUp className="w-6 h-6" />}
                   {v.id === 'finance-xai' && <BarChart3 className="w-6 h-6" />}
                   {v.id === 'startuplens' && <Search className="w-6 h-6" />}
                   {v.id === 'pitch-deck-pro' && <Cpu className="w-6 h-6" />}
                   {v.id === 'green-to-gold' && <Globe className="w-6 h-6" />}
                 </div>
                 <div>
                   <h3 className="font-display font-bold text-xl text-white">{v.name}</h3>
                   <p className="text-[10px] text-blue-500 uppercase tracking-widest font-bold">{v.category}</p>
                 </div>
              </div>
              <p className="text-sm italic text-slate-300">"{v.tagline}"</p>
              <div className="pt-4 flex items-center gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500">Pillar</span>
                  <span className="text-[11px] font-medium text-slate-300">{PILLARS.find(p => p.id === v.pillarId)?.name}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500">Status</span>
                  <div className="flex items-center gap-1.5 transition-all">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[11px] font-medium text-green-400">Live</span>
                  </div>
                </div>
              </div>
              <a 
                href={v.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors w-full sm:w-auto"
              >
                Access Platform <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 border-t lg:border-t-0 lg:border-l border-white/5 lg:pl-8 pt-8 lg:pt-0">
               <div className="space-y-3">
                 <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                   <div className="w-1 h-3 bg-red-500 rounded-full" />
                   Problem Stated
                 </h4>
                 <p className="text-xs leading-relaxed text-slate-400">{v.problem}</p>
               </div>
               <div className="space-y-3">
                 <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                   <div className="w-1 h-3 bg-green-500 rounded-full" />
                   Ecosystem Solution
                 </h4>
                 <p className="text-xs leading-relaxed text-slate-400">{v.solution}</p>
               </div>
               <div className="md:col-span-2 space-y-3">
                 <h4 className="text-xs font-bold text-white uppercase tracking-wider">Target Demographic</h4>
                 <div className="flex flex-wrap gap-2">
                   {v.targetUsers.map((user, i) => (
                     <span key={i} className="text-[10px] px-3 py-1 bg-white/5 border border-white/5 rounded-full text-slate-300 font-medium">
                       {user}
                     </span>
                   ))}
                 </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EthicsView() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">Core Values & AI Ethics</h1>
        <p className="text-slate-400">Our foundation is built on responsible innovation and a deep connection to the communities we serve.</p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] whitespace-nowrap">The Six Core Values</h2>
          <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((val, i) => (
            <div key={i} className="glass-card p-6 border-l-4 border-blue-500 group">
              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors">{val.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] whitespace-nowrap">AI Ethics Commitments</h2>
          <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ETHICS_COMMITMENTS.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl flex gap-4 items-start group hover:border-green-500/30 transition-all">
              <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22C55E80] flex-shrink-0" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white group-hover:text-green-400 transition-colors tracking-tight">{item.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.commitment}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FounderVisionView() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 space-y-8">
           <div className="aspect-square rounded-3xl bg-slate-900 border border-white/10 relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
             <div className="absolute inset-0 flex items-center justify-center text-slate-800 font-display font-black text-9xl">
               AP
             </div>
             <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white">{COMPANY_INFO.founder.name}</h3>
                <p className="text-xs text-blue-400 font-medium uppercase tracking-widest">{COMPANY_INFO.founder.role}</p>
             </div>
           </div>

           <div className="glass-card p-6 space-y-6">
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Connect</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span>atsfy.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>linkedin.com/in/atsfy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>{COMPANY_INFO.founder.email}</span>
                  </div>
                </div>
              </div>
           </div>
        </div>

        <div className="lg:col-span-2 space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">The Visionary Mission</h2>
            <div className="space-y-6 text-slate-400 leading-relaxed lg:text-lg">
               <p>{COMPANY_INFO.founder.bio}</p>
               <p>ATSFY Technologies operates as an AI holding company — each venture is independently built but shares a common intelligence backbone, ethical framework, and infrastructure layer.</p>
               <div className="p-6 bg-blue-600/10 border-l-4 border-blue-500 rounded-r-2xl italic text-slate-300">
                 "We believe AI should be a public good — not a privilege. We measure our success not just in metrics and revenue, but in the number of people who now have access to intelligence tools that would otherwise be unavailable to them."
               </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3 tracking-tight">
              <div className="w-2 h-8 bg-blue-500 rounded-full" />
              Strategic Roadmap
            </h2>
            <div className="space-y-6">
               {ROADMAP.map((step, i) => (
                 <div key={i} className="relative pl-10 group">
                    {i !== ROADMAP.length - 1 && (
                      <div className="absolute left-4 top-10 bottom-0 w-[1px] bg-white/10 group-hover:bg-blue-500/30 transition-colors" />
                    )}
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center z-10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                      <ChevronRight className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="glass-card p-6 space-y-3 group-hover:translate-x-1 transition-transform">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em]">{step.phase}</span>
                        <h4 className="text-base font-bold text-white">{step.name}</h4>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                    </div>
                 </div>
               ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }: { title: string, value: string | number, icon: any, color: 'blue' | 'purple' | 'green' }) {
  const colorMap = {
    blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20 shadow-blue-400/20',
    purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20 shadow-purple-400/20',
    green: 'text-green-400 bg-green-400/10 border-green-400/20 shadow-green-400/20'
  };

  return (
    <div className="glass-card p-6 flex items-center justify-between group hover:border-slate-700 transition-all">
      <div className="space-y-1">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{title}</p>
        <p className="text-2xl font-display font-bold text-white tracking-tight">{value}</p>
      </div>
      <div className={`p-4 rounded-2xl border ${colorMap[color]} shadow-lg transition-transform group-hover:scale-110`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
}

