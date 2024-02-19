import React, { ReactNode } from "react";

interface DynamicButtonProps {
  children: ReactNode;
  className?: string;
  position?: "top-left" | "top-right " | "bottom-left" | "bottom-right";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const DynamicButton: React.FC<DynamicButtonProps> = ({
  children,
  className = "",
  position = "top-left",
  onClick,
}) => {
  const alige = (position: string) => {
    switch (position) {
      case "top-right":
        return "top-5 right-5";
      case "top-left":
        return "top-5 left-5";
      case "bottom-right":
        return "bottom-5 right-5";
      case "bottom-left":
        return "bottom-5 left-5";
      default:
        return "top-5 left-5";
    }
  };
  const alignButtonStyle = alige(position);
  const dynamicButtonStyle = `fixed text-white bg-blue-700 focus:ring-blue-300 font-medium rounded-full text-sm p-5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${alignButtonStyle} ${className}`;
  return (
    <>
      <button className={dynamicButtonStyle} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export { DynamicButton };
