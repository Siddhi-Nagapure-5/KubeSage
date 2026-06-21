import { Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-2 text-muted-foreground w-1/3">
        <Search className="w-4 h-4" />
        <input 
          type="text" 
          placeholder="Search clusters, pods, or metrics..." 
          className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground/70"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-secondary text-muted-foreground transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-card"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-sm border border-border"></div>
      </div>
    </header>
  );
}
