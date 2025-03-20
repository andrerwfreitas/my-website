import React from "react";
import Text from "./Text";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
  <>
    <div className="sticky w-full bg-white border-b flex items-center p-3 gap-3 dark:bg-neutral-900">
    <Link href={"/"} >
      <div className="flex items-center gap-3">
      <Image
        src="/profile-picture.png"
        alt="Profile picture"
        width={40}
        height={40}
        className="rounded-full shadow-sm" />
        <span className="text-xl font-semibold"> 
        André R W Freitas
        </span>
      </div>
      </Link>
    </div>
  </>
);

export default Navbar;
