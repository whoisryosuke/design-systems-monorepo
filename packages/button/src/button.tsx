import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return <div>{children}</div>;
};

export default Button;
