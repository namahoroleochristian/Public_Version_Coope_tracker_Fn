import { ChevronRight, FileText } from 'lucide-react';

export function BalanceSheet() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white">Balance Sheet</h1>
      </div>

      <div className="bg-[#e8ebe5] rounded-2xl p-6">
        <div className="bg-white rounded-xl p-6">
          <h3 className="mb-6">Amakiszi - Sheet (Igitabo rubbabariko Managupuni)</h3>
          
          {/* Hierarchical Tree Structure */}
          <div className="space-y-4">
            {/* Assets Section */}
            <div className="border-l-2 border-gray-300 pl-4">
              <div className="flex items-center gap-2 mb-3">
                <ChevronRight className="w-4 h-4" />
                <span>Assets</span>
              </div>
              
              <div className="pl-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Amafaranga y'ibanze</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Amafaranga (ubundi)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Imyenda</span>
                </div>
              </div>
            </div>

            {/* Liabilities Section */}
            <div className="border-l-2 border-gray-300 pl-4 mt-6">
              <div className="flex items-center gap-2 mb-3">
                <ChevronRight className="w-4 h-4" />
                <span>Liabilities</span>
              </div>
              
              <div className="pl-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Amaretise</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Inkongoro</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Umwitmu</span>
                </div>
              </div>
            </div>

            {/* Equity Section */}
            <div className="border-l-2 border-gray-300 pl-4 mt-6">
              <div className="flex items-center gap-2 mb-3">
                <ChevronRight className="w-4 h-4" />
                <span>Equity</span>
              </div>
              
              <div className="pl-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Umutungo wa kooperative ny abanyamuryango</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Inyunganizikooperative</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Table */}
          <div className="mt-8 pt-6 border-t">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-3">Category</th>
                  <th className="text-right pb-3">Amount (RWF)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="py-3">Total Assets</td>
                  <td className="text-right">850,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Total Liabilities</td>
                  <td className="text-right">250,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Total Equity</td>
                  <td className="text-right">600,000</td>
                </tr>
                <tr>
                  <td className="py-3">Net Balance</td>
                  <td className="text-right">600,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
