import { AreaChart, Area, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Calendar, Lock, CreditCard } from 'lucide-react';

const areaData = [
  { value: 30 }, { value: 45 }, { value: 35 }, { value: 50 }, 
  { value: 40 }, { value: 55 }, { value: 45 }, { value: 60 }
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white">Cash & Book (Igitabo cy'Isanduku)</h1>
      </div>

      <div className="bg-[#e8ebe5] rounded-2xl p-6">
        <div className="mb-6">
          <h2 className="text-gray-600 mb-4">Total Assets</h2>
          <div className="grid grid-cols-4 gap-4">
            {/* Total Assets Card */}
            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-500 text-sm mb-2">First Term</p>
              <p className="text-4xl">800,007</p>
            </div>

            {/* Chart Card 1 */}
            <div className="bg-[#3d5a51] rounded-xl p-4 relative overflow-hidden">
              <div className="text-white mb-2">
                <p className="text-xs opacity-80">Growth</p>
              </div>
              <ResponsiveContainer width="100%" height={60}>
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7fb899" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#7fb899" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke="#7fb899" fillOpacity={1} fill="url(#colorGrowth)" />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-white text-xl mt-2">$20,007</p>
            </div>

            {/* Amount Card 2 */}
            <div className="bg-[#4a6157] rounded-xl p-6 text-white">
              <p className="text-xs opacity-80 mb-2">Second Term</p>
              <p className="text-2xl">$20,007</p>
            </div>

            {/* Amount Card 3 */}
            <div className="bg-[#3d5a51] rounded-xl p-6 text-white">
              <p className="text-xs opacity-80 mb-2">Third Term</p>
              <p className="text-2xl">$20,007</p>
            </div>
          </div>
        </div>

        {/* Circular Progress Stats */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex items-center justify-center gap-8">
            {/* First Circle */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-8 border-gray-300 relative">
                <div className="absolute inset-0 rounded-full border-8 border-[#4a6157] border-t-transparent border-l-transparent border-r-transparent rotate-[270deg]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">76%</span>
                </div>
              </div>
              <p className="text-center text-sm mt-2 text-gray-600">Small Saves (aman)<br/>Inyunganizi (contributions)</p>
            </div>

            {/* Icons Stats */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#4a6157]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Insert Yapense<br/>(interest)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#4a6157]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Imyenda<br/>(losses)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            {/* Second Circle */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-8 border-gray-300 relative">
                <div className="absolute inset-0 rounded-full border-8 border-[#4a6157] border-b-transparent border-l-transparent rotate-[90deg]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">792</span>
                </div>
              </div>
            </div>

            {/* More Icons Stats */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#4a6157]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Expenses<br/>(Ibisoreshwa)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[#4a6157]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Loans<br/>(ngunzi)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Table */}
        <div className="bg-white rounded-xl p-6">
          <h3 className="mb-4">Insesa (lasciyman) (Seasons)</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3">Category</th>
                <th className="pb-3 text-right">1st</th>
                <th className="pb-3 text-right">2nd</th>
                <th className="pb-3 text-right">3rd</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3">Contributions Collected by harvessurement</td>
                <td className="text-right">50</td>
                <td className="text-right">2430</td>
                <td className="text-right">23,536</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Imyenda (contributions-izahawe)</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
                <td className="text-right">23,536</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Inguzanyo (Loans)</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
              </tr>
              <tr>
                <td className="py-3">Umutungo (Capital)</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
                <td className="text-right">13,370</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
