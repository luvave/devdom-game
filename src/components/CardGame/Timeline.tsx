export const Timeline = () => (
  <ol className="w-full items-center sm:flex justify-between">
    <li className="w-full relative mb-3 sm:mb-0">
      <div className="flex items-center">
        <div
          className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
        >
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-600 dark:text-blue-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
      </div>
      <div className="mt-3 sm:pr-10">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-400">Some Event</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          December 2, 2021
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          description
        </p>
      </div>
    </li>
    <li className="w-full relative mb-6 sm:mb-0">
      <div className="flex items-center">
        <div
          className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
        >
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-600 dark:text-blue-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
      </div>
      <div className="mt-3 sm:pr-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-400">Next Event</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          December 23, 2021
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          description
        </p>
      </div>
    </li>
    <li className="w-full relative mb-6 sm:mb-0">
      <div className="flex items-center">
        <div
          className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
        >
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-600 dark:text-blue-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
      </div>
      <div className="mt-3 sm:pr-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-400">Another Event</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          January 5, 2022
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          description
        </p>
      </div>
    </li>
  </ol>
);
