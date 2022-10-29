import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Workers List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About us</Link>
      <Link href="/Workers">WorkerListing</Link>
    </nav>
  );
};

export default Navbar;
