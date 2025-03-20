import Image from "next/image";

const GitHubLogo = ({ color = "default", className}) => {
  const src =  {
    white: "/github-mark-white.svg",
    default: "/github-mark.svg",
  }
  return (
    <Image src={src[color]} alt={"github"} width={98} height={96} className={`${className}`} />
  )
};

export default GitHubLogo;
