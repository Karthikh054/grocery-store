import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

export const Nav = () => {
  return (
    <nav className="py-4">
      <div className="container flex items-center gap-5 justify-between">
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Fruits & Vegetables
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Meats & Seafood
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Breaksfast & Dairy
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Breads & Bakery
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Beverages
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Frozen Foods
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Biscuits & Snacks
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Grocery & Staples
        </Link>
        <div className="relative group">
          <span className="text-[16px] text-gray-800 font-[600] hover:text-primary flex items-center gap-1 cursor-pointer">
            More <FaAngleDown size={20} />
          </span>

          <div className="dropdown-menu flex flex-col absolute top-[100%] right-0 bg-white shadow-md rounded-md overflow-hidden w-[200px] invisible opacity-0 transition group-hover:visible group-hover:opacity-100 pt-4">
            <Link
              href="/"
              className="text-[14px] text-gray-800 font-[600] hover:text-primary flex py-2 px-4"
            >
              Beverages
            </Link>
            <Link
              href="/"
              className="text-[14px] text-gray-800 font-[600] hover:text-primary flex py-2 px-4"
            >
              Beverages
            </Link>
            <Link
              href="/"
              className="text-[14px] text-gray-800 font-[600] hover:text-primary flex py-2 px-4"
            >
              Beverages
            </Link>
            <Link
              href="/"
              className="text-[14px] text-gray-800 font-[600] hover:text-primary flex py-2 px-4"
            >
              Beverages
            </Link>
            <Link
              href="/"
              className="text-[14px] text-gray-800 font-[600] hover:text-primary flex py-2 px-4"
            >
              Beverages
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
