import { Sprout, LayoutDashboard, Users, BookOpen, Receipt, FileText, PieChart, FileSpreadsheet } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'dashboard', label: 'Cash Book', icon: BookOpen },
    { id: 'members', label: 'Members Share', icon: Users },
    { id: 'inverter', label: 'Inverter Book', icon: FileText },
    { id: 'sales', label: 'Sales Book', icon: Receipt },
    { id: 'balance', label: 'Balance Sheet', icon: PieChart },
    { id: 'assets', label: 'Asset Share', icon: FileSpreadsheet },
  ];

  return (
    <aside className="w-64 bg-[#1f3630] text-white p-6">
      <div className="mb-8 flex items-center gap-2">
        <div className="w-10 h-10 bg-[#2d4a42] rounded-lg flex items-center justify-center">
          <Sprout className="w-6 h-6 text-[#7fb899]" />
        </div>
        <div>
          <h1 className="font-semibold">Coopetracker</h1>
        </div>
      </div>

      <nav>
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#3d5a51] text-white'
                      : 'text-gray-300 hover:bg-[#2d4a42]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
