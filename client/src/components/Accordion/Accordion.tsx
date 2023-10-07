import React, { useState } from "react";
import "./style.css"

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const mountedStyle = { animation: "inAnimation 250ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards",
  };

  return (
        <>
        <div className="accordion" onClick={() => setIsActive(!isActive)}>
          <span>{title}</span>
          <button>{isActive ? "-" : "+"}</button>
        </div>
        {isActive && (
          <div className="ans" style={isActive ? mountedStyle : unmountedStyle}>
            <p>{content}</p>
          </div>
        )}
      </>
  );
};

export default Accordion;
