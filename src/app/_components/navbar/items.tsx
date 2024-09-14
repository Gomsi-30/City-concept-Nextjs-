import { useState } from "react";
import Link from "next/link";

type ItemsProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

const Items = ({ isOpen, closeMenu }: ItemsProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
    closeMenu(); 
  };

  return (
    <div
      className={`${
        isOpen
          ? "mt-[20px] flex flex-col gap-9 font-semibold text-md sm:hidden"
          : "hidden sm:flex flex-row items-center sm:gap-5 md:gap-9"
      }`}
    >
      <Link className="font-medium" href="/aboutus" onClick={handleLinkClick}>
        ABOUT US
      </Link>
      <Link className="font-medium" href="/services" onClick={handleLinkClick}>
        SERVICES
      </Link>

      {/* Dropdown with click */}
      <div className="relative inline-block">
        <button onClick={toggleDropdown} className="font-medium">
          TOOLS
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <Link
                href="/tools/villa"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Villa Type
              </Link>
              <Link
                href="/tools/flat"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Flat Type
              </Link>
              <Link
                href="/tools/house"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                House Type
              </Link>
            </div>
          </div>
        )}
      </div>

      <Link className="font-medium" href="/blogs" onClick={handleLinkClick}>
        BLOGS
      </Link>
      <Link href="/contactus" onClick={handleLinkClick}>
        <button className="p-1 px-2 font-medium text-white bg-blue-500 text-md rounded-md">
          CONTACT
        </button>
      </Link>
    </div>
  );
};

export default Items;
