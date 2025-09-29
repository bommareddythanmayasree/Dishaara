import { useState } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { HomePage } from "@/components/HomePage";
import { GuidesPage } from "@/components/GuidesPage";
import { EventsPage } from "@/components/EventsPage";
import { SafetyPage } from "@/components/SafetyPage";
import { ProfilePage } from "@/components/ProfilePage";
import { VehiclesPage } from "@/components/VehiclesPage";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { GuideDashboard } from "@/components/guide/GuideDashboard";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [showAdmin, setShowAdmin] = useState(false);
  const [showGuidePortal, setShowGuidePortal] = useState(false);

  if (showAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
        <div className="w-full max-w-[430px] min-h-screen bg-background shadow-2xl rounded-3xl overflow-hidden border-8 border-slate-800 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-2xl z-50"></div>
          <div className="h-full overflow-y-auto">
            <AdminDashboard onBack={() => setShowAdmin(false)} />
          </div>
        </div>
      </div>
    );
  }

  if (showGuidePortal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
        <div className="w-full max-w-[430px] min-h-screen bg-background shadow-2xl rounded-3xl overflow-hidden border-8 border-slate-800 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-2xl z-50"></div>
          <div className="h-full overflow-y-auto">
            <GuideDashboard onBack={() => setShowGuidePortal(false)} />
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage 
          onNavigate={setActiveTab} 
          onAdminAccess={() => setShowAdmin(true)}
          onGuideAccess={() => setShowGuidePortal(true)}
        />;
      case "guides":
        return <GuidesPage />;
      case "events":
        return <EventsPage />;
      case "safety":
        return <SafetyPage />;
      case "profile":
        return <ProfilePage />;
      case "vehicles":
        return <VehiclesPage />;
      default:
        return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-[430px] min-h-screen bg-background shadow-2xl rounded-3xl overflow-hidden border-8 border-slate-800 relative">
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-2xl z-50"></div>
        
        <main className="h-full overflow-y-auto pb-20">
          {renderContent()}
        </main>
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}