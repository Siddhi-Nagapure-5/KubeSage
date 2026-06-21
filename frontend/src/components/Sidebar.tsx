import Link from 'next/link';
import { LayoutDashboard, Activity, AlertTriangle, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-card/50 backdrop-blur-sm h-screen flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
          <Activity className="w-6 h-6 text-blue-500" />
          KubeSage
        </div>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-2">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-secondary text-primary transition-colors">
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </Link>
        <Link href="/alerts" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-primary transition-colors">
          <AlertTriangle className="w-4 h-4" />
          Alerts
        </Link>
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-primary transition-colors">
          <Settings className="w-4 h-4" />
          Settings
        </Link>
      </nav>
      
      <div className="p-4 border-t border-border text-xs text-muted-foreground">
        AI Intelligence Active
      </div>
    </aside>
  );
}
