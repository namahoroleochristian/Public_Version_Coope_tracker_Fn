import { useState } from 'react';
import { DashboardOverview } from './components/DashboardOverview';
import { MembersShare } from './components/MembersShare';
import { InverterBook } from './components/InverterBook';
import { SalesBook } from './components/SalesBook';
import { BalanceSheet } from './components/BalanceSheet';
import { AssetShare } from './components/AssetShare';
import { Sidebar } from './components/Sidebar';

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'members':
        return <MembersShare />;
      case 'inverter':
        return <InverterBook />;
      case 'sales':
        return <SalesBook />;
      case 'balance':
        return <BalanceSheet />;
      case 'assets':
        return <AssetShare />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#2d4a42] flex">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 p-6">
        {renderContent()}
      </main>
    </div>
  );
}
