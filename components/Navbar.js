import Link from "next/link";
import LinkButton from "./LinkButton";

const Navbar = () => (
  <>
    <div className="w-full text-center flex flex-col justify-center">
      <Link href="/">
        <h1 className="w-full text-3xl">André R. W. Freitas / projects</h1>
      </Link>
      <a
        href="https://bento.me/andrefreitas"
        className="w-full"
        target="_blank"
      >
        <LinkButton className="no-underline">Social media</LinkButton>
      </a>
    </div>
  </>
);
export default Navbar;
