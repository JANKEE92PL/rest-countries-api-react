export default function Search() {
  return (
    <form method="GET" className="w-1/3">
      <div
        className="relative text-gray-600 bg-white hover:shadow-md transition w-max
      ease-in-out"
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 ">
          <button type="submit" className="p-1">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="q"
          className="text-sm text-gray-600 bg-white pl-16 border-0 focus:ring-0 w-96 py-4 pr-8 rounded-lg"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
    </form>
  );
}
