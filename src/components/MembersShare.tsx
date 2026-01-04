import { Search, Download, Plus, MoreVertical } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const chartData = [
  { value: 30 }, { value: 50 }, { value: 35 }, { value: 60 }, 
  { value: 45 }, { value: 70 }, { value: 55 }
];

export function MembersShare() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white">Members' Share Register</h1>
        <button className="bg-[#d4a84a] hover:bg-[#c4983a] text-black px-4 py-2 rounded-lg flex items-center gap-2">
          <Download className="w-4 h-4" />
          Generate PDF
        </button>
      </div>

      <div className="bg-[#e8ebe5] rounded-2xl p-6">
        {/* Stats Cards */}
        <div className="mb-6">
          <h2 className="text-gray-600 mb-4">Total Members</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-500 text-sm mb-2">Active Members</p>
              <p className="text-4xl">$20,007</p>
            </div>
            
            <div className="bg-[#3d5a51] rounded-xl p-4">
              <ResponsiveContainer width="100%" height={60}>
                <LineChart data={chartData}>
                  <Line type="monotone" dataKey="value" stroke="#7fb899" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-white text-xl mt-2">Growth</p>
            </div>

            <div className="bg-[#4a6157] rounded-xl p-6 text-white">
              <p className="text-xs opacity-80 mb-2">Total Shares</p>
              <p className="text-2xl">$20,007</p>
            </div>

            <div className="bg-[#3d5a51] rounded-xl p-6 text-white">
              <p className="text-xs opacity-80 mb-2">Share Value</p>
              <p className="text-2xl">$20,007</p>
            </div>
          </div>
        </div>

        {/* Add Member Panel */}
        <div className="bg-white rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button className="flex items-center gap-2 text-[#4a6157]">
              <Plus className="w-5 h-5" />
              Add New Member
            </button>
            <MoreVertical className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Member's Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Enter name" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Share ID</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Auto ID" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Contributions Loyalty ID</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Umunyururo</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Contribution Statements (?)</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="flex gap-4">
            <select className="px-3 py-2 border border-gray-300 rounded-lg">
              <option>Reapprocations</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg">
              <option>Rose Statements</option>
            </select>
            <button className="ml-auto bg-[#4a6157] hover:bg-[#3d5a51] text-white px-6 py-2 rounded-lg">
              Save
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search transaction"
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Members Table */}
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3>ID (Inkota (Efficore Nyigunzuro Bizawa)</h3>
          </div>
          
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3">Members Column (names)</th>
                <th className="pb-3 text-right">Nyamirambo</th>
                <th className="pb-3 text-right">Kacimbizo</th>
                <th className="pb-3 text-right">Mumbiro</th>
                <th className="pb-3 text-right">Inyerakazi</th>
                <th className="pb-3 text-right">Bisowe</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3">Umwanyo ny'umwaka</td>
                <td className="text-right">-</td>
                <td className="text-right">13,000</td>
                <td className="text-right">938</td>
                <td className="text-right">50355</td>
                <td className="text-right">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Impeshaminywumwarako</td>
                <td className="text-right">10,000</td>
                <td className="text-right">11,000</td>
                <td className="text-right">938</td>
                <td className="text-right">30595</td>
                <td className="text-right">50</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Umungurano</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
              </tr>
              <tr>
                <td className="py-3">Umusanzu wa uzigbi</td>
                <td className="text-right">10,000</td>
                <td className="text-right">11,000</td>
                <td className="text-right">938</td>
                <td className="text-right">36,365</td>
                <td className="text-right">50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
