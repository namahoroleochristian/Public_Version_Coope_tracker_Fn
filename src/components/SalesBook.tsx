import { TrendingUp, DollarSign, ShoppingCart } from 'lucide-react';

export function SalesBook() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white">Sales Book (Igitabo cy'Abalimungo)</h1>
      </div>

      <div className="bg-[#e8ebe5] rounded-2xl p-6">
        {/* Sales Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-6">
            <p className="text-gray-500 text-sm mb-2">Total Sales</p>
            <p className="text-4xl">$268,007</p>
          </div>
          
          <div className="bg-[#4a6157] rounded-xl p-6 text-white">
            <p className="text-xs opacity-80 mb-2">Monthly Revenue</p>
            <p className="text-2xl">$20,007</p>
          </div>

          <div className="bg-[#3d5a51] rounded-xl p-6 text-white">
            <p className="text-xs opacity-80 mb-2">Daily Revenue</p>
            <p className="text-2xl">$20,007</p>
          </div>
        </div>

        {/* Active Tabs Panel */}
        <div className="bg-white rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingCart className="w-5 h-5 text-[#4a6157]" />
            <h3>Add New Sales</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Product Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Quantity</label>
              <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Price per Unit</label>
              <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#4a6157] hover:bg-[#3d5a51] text-white px-6 py-2 rounded-lg">
              Save
            </button>
          </div>
        </div>

        {/* Sales Expenses */}
        <div className="bg-white rounded-xl p-6 mb-6">
          <h3 className="mb-4">Impenaye / (Abasarebanye uv solbermey)</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3">Details</th>
                <th className="pb-3 text-right">Descripyon</th>
                <th className="pb-3 text-right">Ibihembo gincored</th>
                <th className="pb-3 text-right">Ubwezaruyezo y ubundi</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3">Espereza gukorwa</td>
                <td className="text-right">Avakado</td>
                <td className="text-right">500000</td>
                <td className="text-right">330</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Impomezamazizo nyibumuwumurako</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
                <td className="text-right">330</td>
              </tr>
              <tr>
                <td className="py-3">Ela Umwambo riaribu izabe</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
                <td className="text-right">330</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Today's Results Activity */}
        <div className="bg-white rounded-xl p-6">
          <h3 className="mb-4">Today & Results (Imiyunaniro Activity)</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3">Transaction (Description)</th>
                <th className="pb-3 text-right">Composition</th>
                <th className="pb-3 text-right">Dapramaninment</th>
                <th className="pb-3 text-right">Payment</th>
                <th className="pb-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3">Ibikoresho (insurance)</td>
                <td className="text-right">-</td>
                <td className="text-right">500000</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Impomezamazizo njin</td>
                <td className="text-right">Abuminzinzi</td>
                <td className="text-right">500000</td>
                <td className="text-right">330</td>
                <td className="text-right">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Impombyo wee</td>
                <td className="text-right">-</td>
                <td className="text-right">500000</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Yamakiza</td>
                <td className="text-right">-</td>
                <td className="text-right">500000</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
              </tr>
              <tr>
                <td className="py-3">Impombirembi</td>
                <td className="text-right">-</td>
                <td className="text-right">500000</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
