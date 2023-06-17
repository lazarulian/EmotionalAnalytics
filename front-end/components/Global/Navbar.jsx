import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-gray-800 rounded-lg">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            BabuTrack
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/model">Model</Link>
            </li>
            <li>
              <Link href="/model">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
