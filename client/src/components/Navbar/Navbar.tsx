import { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <div className={`nav ${show && "black"}`}>
      <h1 className="logo">Meet Devs</h1>
      <Button text="Sign In" size="sm"/>
    </div>
  );
};

export default Navbar;
