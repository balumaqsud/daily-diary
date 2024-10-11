import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>
        <h1>Next-Blogs</h1>
      </Link>
      <Link href={"/"}>Home</Link>
      <Link href={"/blogs"}>Blogs</Link>
    </nav>
  );
};

export default Navbar;
