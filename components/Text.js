import React from "react";

const Text = ({ children, className = "", variant = "p", ...props }) => {
  const baseClass = "p-0 m-0";
  const variantClass = {
    h1: "text-4xl font-semibold",
    h2: "text-2xl font-semibold",
    h3: "text-xl font-semibold",
    p: "text-lg",
  };

  return <p className={`${baseClass} ${variantClass[variant]} ${className}`}  {...props}>{children}</p>;
};

export default Text;
