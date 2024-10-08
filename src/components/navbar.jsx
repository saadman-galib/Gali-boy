import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
  return (
    <nav className="bg-gray-800 px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto p-2">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Saadman Galib
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            const navbar = document.getElementById("navbar-default");
            navbar.classList.toggle("hidden");
          }}
        >
          <RxHamburgerMenu className="w-6 h-6" aria-hidden="true" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-800 rounded-lg border border-gray-600 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-white bg-cyan-900 rounded md:bg-transparent md:text-cyan-900 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-900 md:p-0 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-900 md:p-0 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:border-gray-700"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-900 md:p-0 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
