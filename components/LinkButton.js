import Link from "next/link";

const LinkButton = ({className, children, }) =>
  <>
    <span className={`underline text-blue-600 cursor-pointer ${className}`}>{children}</span>
  </>
  ;

export default LinkButton;