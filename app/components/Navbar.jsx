import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>
        <h1 className="bold">Daily-Diary</h1>
      </Link>
      <Link href={"/"}>Home</Link>
      <Link href={"/diaries"}>Diaries</Link>
      <Link href={"/about"}>About </Link>
    </nav>
  );
};

export default Navbar;
