/* This example requires Tailwind CSS v2.0+ */
import { MoonIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="sm:flex lg:items-center lg:justify-between z-10 bg-white shadow-md px-16">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-800 sm:text-3xl sm:truncate inline-flex">
          Where in the World?{" "}
        </h2>
      </div>
      <div className="sm:p-8 flex sm:mt-0 lg:ml-4">
        <span className="sm:ml-3">
          <button
            type="button"
            className="sm:truncate inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-600 hover:shadow-xl transition
      ease-in-out"
          >
            <MoonIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Dark Mode
          </button>
        </span>
      </div>
    </div>
  );
}
