import Link from "next/link";
import React from "react";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 z-50 relative border-b border-border p-2">
      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/users"}>Users</Link>
          </li>
        </ul>
      </nav>

      <ModeToggle />
    </div>
  );
};

export default Navbar;
