export function AssetShare() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white">Fad Assets Share (Mutement)</h1>
        <button className="bg-[#d4a84a] hover:bg-[#c4983a] text-black px-4 py-2 rounded-lg">
          Generate Statement
        </button>
      </div>

      <div className="bg-[#e8ebe5] rounded-2xl p-6">
        <h2 className="text-xl mb-6">Inconteshablefize (Insistentisterse)</h2>

        {/* Asset Categories */}
        <div className="space-y-4">
          {/* Category Header */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Amaryinobishatakawa</p>
            </div>
            <div className="bg-[#c8e6c9] rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Amperemushoshuakonire</p>
              <p className="text-xs">Add Imachinokoniishatsi</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Inyuwabishe</p>
            </div>
          </div>

          {/* Asset Table */}
          <div className="bg-white rounded-xl p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-500">
                  <th className="pb-3">Asset Category</th>
                  <th className="text-right pb-3">Properties on perchesionnwear</th>
                  <th className="text-right pb-3">Duskandatwa</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="py-3">Umutungo wa ugabe</td>
                  <td className="text-right">-</td>
                  <td className="text-right">-</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Imbikire inde</td>
                  <td className="text-right">630</td>
                  <td className="text-right">165</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Ifibonze</td>
                  <td className="text-right">-</td>
                  <td className="text-right">2,820</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Ubwaratanguzanyobuhotelato</td>
                  <td className="text-right">9,000</td>
                  <td className="text-right">9,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Ubwarumanasamuyokulu</td>
                  <td className="text-right">-</td>
                  <td className="text-right">-</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Impunguzo wa mmamba</td>
                  <td className="text-right">50</td>
                  <td className="text-right">15,000</td>
                </tr>
                <tr>
                  <td className="py-3">Ubwarakurakuzanyoko</td>
                  <td className="text-right">-</td>
                  <td className="text-right">-</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 pt-4 border-t flex justify-between">
              <span className="text-sm">Neepogonus</span>
              <button className="bg-[#4a6157] hover:bg-[#3d5a51] text-white px-6 py-2 rounded-lg text-sm">
                Submit
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6">
              <h4 className="text-sm text-gray-600 mb-3">Asset Distribution</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Fixed Assets</span>
                  <span>65%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Current Assets</span>
                  <span>35%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h4 className="text-sm text-gray-600 mb-3">Total Valuation</h4>
              <p className="text-3xl">26,985</p>
              <p className="text-sm text-gray-500 mt-1">RWF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
