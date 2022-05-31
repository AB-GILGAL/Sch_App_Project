import React from "react";
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="shadow-md py-5">
      <nav className="max-w-8xl mx-auto flex justify-between items-center">
        <h3 className="text-xl text-teal-500 font-semibold text-5xl">
          Find<span className="text-red-500 ">Edu</span>
        </h3>
        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-10 text-2xl">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/add-school">Add School</Link>
            </li>
            <li>
              <Link href="/">Log Out</Link>
            </li>
          </ul>
          <Search />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
