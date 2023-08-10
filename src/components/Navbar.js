// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 mx-6 p-2">
        <li>
          <Link href="#" className="text-white m-2 hover:text-gray-300">
            Cari kerja
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-white m-2 hover:underline hover:bg-red-500 hover:p-2"
          >
            Perusahan
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-white hover:underline m-2 hover:bg-red-500 hover:p-2"
          >
            Tips Cari Kerja
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-white hover:underline m-2 hover:bg-red-500 hover:p-2"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
