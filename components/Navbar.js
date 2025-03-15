import React from "react";
import Text from "./Text";
import Link from "next/link";

const Navbar = () => (
  <>
    <div className="sticky w-full bg-white border-b flex items-center p-3 gap-3">
    <Link href={"/"} >
      <div className="flex items-center gap-3">
      <img
        src="/profile-picture.png"
        alt="Profile picture"
        className="size-10 rounded-full shadow-sm" />
        <span className="text-xl font-semibold"> 
        André R W Freitas
        </span>
      </div>
      </Link>
    </div>
  </>
);

export default Navbar;
