import { Users, FileText, Building, TrendingUp } from 'lucide-react';

export function InverterBook() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white">Inverter Book (Igitabo cy'Umunyurye)</h1>
      </div>

      <div className="bg-[#e8ebe5] rounded-2xl p-6">
        {/* Client Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#4a6157] rounded-full overflow-hidden flex items-center justify-center text-white">
              JD
            </div>
            <div>
              <p className="text-sm text-gray-500">Client Initialate</p>
              <p>Abahandura Niwa Bafite</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#4a6157]" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Plan Yumbe (Recorded)</p>
              <p>Registration</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-[#4a6157]" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Old line Invebmens</p>
              <p>Igisabana</p>
            </div>
          </div>
        </div>

        {/* Investment Tracking */}
        <div className="bg-white rounded-xl p-6 mb-6">
          <h3 className="mb-4">Portfolio Investments (Isigonofdi)</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3">Itaraire</th>
                <th className="pb-3 text-center">Description/Comments</th>
                <th className="pb-3 text-right">Masanzu</th>
                <th className="pb-3 text-right">Ubundu</th>
                <th className="pb-3 text-right">Balance</th>
                <th className="pb-3 text-right">Bonfire</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3">Emma panyiramusha</td>
                <td className="text-center">10,000</td>
                <td className="text-right">3.83</td>
                <td className="text-right">600</td>
                <td className="text-right">50,00</td>
                <td className="text-right">1</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Uwanayna (inawa lufuramu)</td>
                <td className="text-center">10,000</td>
                <td className="text-right">3.83</td>
                <td className="text-right">600</td>
                <td className="text-right">50,00</td>
                <td className="text-right">1</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Impomezamazizo nyibumwumurako</td>
                <td className="text-center">12,500</td>
                <td className="text-right">4.83</td>
                <td className="text-right">600</td>
                <td className="text-right">50,00</td>
                <td className="text-right">1</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Umunye ya uzumbaruko</td>
                <td className="text-center">-</td>
                <td className="text-right">3.83</td>
                <td className="text-right">212</td>
                <td className="text-right">50,00</td>
                <td className="text-right">-</td>
              </tr>
              <tr>
                <td className="py-3">Emma ya Faramu</td>
                <td className="text-center">-</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
                <td className="text-right">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Today's Records */}
        <div className="bg-white rounded-xl p-6">
          <h3 className="mb-4">Today's Records (Records (Mbare z Advisaries)</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-3">Matende's Limemence</th>
                <th className="pb-3 text-right">Masanzu</th>
                <th className="pb-3 text-right">Ubundu</th>
                <th className="pb-3 text-right">Ubundu</th>
                <th className="pb-3 text-right">Balance</th>
                <th className="pb-3 text-right">Bonfire</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3">Emma panyiramusha</td>
                <td className="text-right">2,000</td>
                <td className="text-right">1.83</td>
                <td className="text-right">600</td>
                <td className="text-right">50,00</td>
                <td className="text-right">1</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Uwanayna (inawa)</td>
                <td className="text-right">3,500</td>
                <td className="text-right">1.83</td>
                <td className="text-right">145</td>
                <td className="text-right">50,00</td>
                <td className="text-right">1</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Impomezamazizo nyibumuzo</td>
                <td className="text-right">3,500</td>
                <td className="text-right">3.83</td>
                <td className="text-right">145</td>
                <td className="text-right">50,00</td>
                <td className="text-right">1</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">Umufala</td>
                <td className="text-right">3,500</td>
                <td className="text-right">3.83</td>
                <td className="text-right">212</td>
                <td className="text-right">50,00</td>
                <td className="text-right">1</td>
              </tr>
              <tr>
                <td className="py-3">Umwuride</td>
                <td className="text-right">2,000</td>
                <td className="text-right">4.83</td>
                <td className="text-right">212</td>
                <td className="text-right">50,00</td>
                <td className="text-right">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
