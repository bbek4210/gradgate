import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles = "px-8 py-3 rounded-lg font-medium transition-colors";
  const variantStyles = {
    primary: "bg-[#C8E6F5] text-[#1E3A5F] hover:bg-[#B0D9EB]",
    secondary:
      "bg-transparent border-2 border-white text-white hover:bg-white/10",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
