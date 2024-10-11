import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>
        <h1>Daily-Diary</h1>
      </Link>
      <Link href={"/"}>Home</Link>
      <Link href={"/diaries"}>Diaries</Link>
      <Link href={"/Favourites"}>Favourites</Link>
      <Link href={"/about"}>About me </Link>
    </nav>
  );
};

export default Navbar;
