export default function Search() {
  return (
    <form method="GET" className="p-8 w-1/3">
      <div className="relative text-gray-600 px-8 my-4 bg-white rounded hover:shadow-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
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
          className="text-sm text-gray-600 bg-white pl-10 border-0 focus:ring-0 w-96 py-6"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
    </form>
  );
}
