import { Activity, Server, AlertCircle, Box } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Cluster Overview</h1>
        <p className="text-muted-foreground mt-1">
          Real-time insights and predictive analysis for your Kubernetes environment.
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-6 bg-card rounded-xl border border-border shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Total Pods</h3>
            <Box className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">56</p>
        </div>
        
        <div className="p-6 bg-card rounded-xl border border-border shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Healthy Nodes</h3>
            <Server className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-3xl font-bold">3 <span className="text-sm text-muted-foreground font-normal">/ 3</span></p>
        </div>

        <div className="p-6 bg-card rounded-xl border border-border shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Active Warnings</h3>
            <AlertCircle className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-3xl font-bold">4</p>
        </div>

        <div className="p-6 bg-card rounded-xl border border-border shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Cluster Health</h3>
            <Activity className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold text-emerald-500">92%</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Recommendations */}
        <div className="lg:col-span-2 p-6 bg-card rounded-xl border border-border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">AI Insights & Predictions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-secondary/50 rounded-lg border border-border/50">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-medium">Pod Failure Prediction</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Prediction: <span className="text-foreground font-medium">inventory-service</span> has a 78% probability of entering CrashLoopBackOff within 30 minutes due to memory trends.
                  </p>
                  <button className="mt-3 text-sm bg-primary text-primary-foreground px-3 py-1.5 rounded-md font-medium hover:bg-primary/90 transition-colors">
                    View Analysis
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-secondary/50 rounded-lg border border-border/50">
              <div className="flex gap-3">
                <Activity className="w-5 h-5 text-blue-500 shrink-0" />
                <div>
                  <h4 className="font-medium">Scaling Recommendation</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Recommendation: Increase replicas from 3 to 5 for <span className="text-foreground font-medium">recommendation-service</span> to handle current traffic spikes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 bg-card rounded-xl border border-border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Events</h2>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border border-primary bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] ml-4 md:ml-0 md:group-even:text-right">
                <div className="text-sm font-medium">checkout-service restarted</div>
                <div className="text-xs text-muted-foreground">2 mins ago</div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border border-border bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] ml-4 md:ml-0 md:group-even:text-right">
                <div className="text-sm font-medium">payment-service scaled to 3</div>
                <div className="text-xs text-muted-foreground">15 mins ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
