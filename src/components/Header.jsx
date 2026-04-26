import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Search } from "./Search";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <header className="py-3 border-b-[1px] border-[rgba(0,0,0,0.1)]">
          <div className="container flex items-center justify-between">
            <div className="logo">
              <Link href={"/"}>
                <Image src={"/logo.png"} alt="logo" width={230} height={61} />
              </Link>
            </div>
            <Search />

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <Link href={"/login"} className="hover:text-primary">
                  Login
                </Link>
                <span>|</span>
                <Link href={"/register"} className="hover:text-primary">
                  Register
                </Link>
              </div>
              <div className="flex items-center gap-8">
                <Link href={"/wishlist"} className="relative flex group">
                  <span className="bg-[#DC2626] w-6 h-6 rounded-full flex items-center justify-center text-white absolute -top-[10px] -right-[17px] z-50">
                    3
                  </span>
                  <FaRegHeart
                    size={25}
                    className="cursor-pointer text-gray-700 group-hover:text-primary"
                  />
                </Link>
                <Link href={"/cart"} className="relative flex group">
                  <span className="bg-[#DC2626] w-6 h-6 rounded-full flex items-center justify-center text-white absolute -top-[10px] -right-[17px] z-50">
                    3
                  </span>
                  <IoBagOutline
                    size={30}
                    className="cursor-pointer text-gray-700 group-hover:text-primary"
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <Nav />
      </div>
    </>
  );
};
