import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600",
    secondary: "bg-white hover:bg-gray-100 text-blue-600 border border-blue-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition cursor-pointer ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;