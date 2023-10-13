import React, { MouseEvent } from "react";
import "./TButton.css";

interface TButtonProp {
  onClick?: (e?: MouseEvent) => void;
  value: string;
  className?: string;
}

function TButton({ onClick, value, className }: TButtonProp): JSX.Element {
  return (
    <button
      onClick={(e) => {
        onClick ? onClick(e) : null;
      }}
      className={"TButton " + className}
    >
      {value}
    </button>
  );
}

export default TButton;
