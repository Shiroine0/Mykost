const SearchBar = () => {
    return (
      <div className="mt-8 bg-white shadow rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 max-w-6xl mx-auto">
        {/* ini kyknya urg bakal jadiin dropdown sih soalnya nyari lokasinya doang jadi dropdown pun kyknya bisa*/}
        {/* <div className="flex flex-col">
          <label className="text-sm text-gray-400">Lokasi</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Masukan lokasi"
              className="outline-none"
            />
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>
   */}
        <div className="w-px h-8 bg-gray-200 hidden sm:block" />
  
        {/* Select Fields */}
        {['tipe kosan', 'Fasilitas kamar', 'Aturan Kosan'].map((label, i) => (
          <div key={i} className="flex flex-col">
            <label className="text-sm text-gray-400 capitalize">{label}</label>
            <select className="bg-transparent outline-none">
              <option>All Status</option>
            </select>
          </div>
        ))}
  
        <div className="w-px h-8 bg-gray-200 hidden sm:block" />
  
        {/* Price Inputs
        <div className="flex flex-col">
          <label className="text-sm text-gray-400">Harga</label>
          <div className="flex gap-2">
            <input
              type="text"
              defaultValue="Rp.0"
              className="outline-none w-20"
            />
            <span className="text-gray-400">-</span>
            <input
              type="text"
              defaultValue="Rp 10.000.000"
              className="outline-none w-28"
            />
          </div>
        </div>
  
        <div className="w-px h-8 bg-gray-200 hidden sm:block" />
   */}
        {/* Search Button */}
        <button className="btn bg-[#7B61FF] text-white rounded-xl px-6">
          Search
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  