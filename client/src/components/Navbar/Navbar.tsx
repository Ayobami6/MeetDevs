<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './navbar.css';
=======
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./navbar.css";
>>>>>>> debe613 (feat: add talent and auth route to client app)

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

<<<<<<< HEAD
        window.addEventListener('scroll', handleShow);
        return () => {
            window.removeEventListener('scroll', handleShow);
        };
    }, []);
    return (
        <div className={`nav ${show && 'black'}`}>
            {/* <h1 className="logo">Meet Devs</h1> */}
            <img src='src/assets/logo.png' alt='logo' width={150} />
            <Link to={'/auth'}>
                <Button text='Sign In' size='sm' />
            </Link>
        </div>
    );
=======
    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <div className={`nav ${show && "black"}`}>
      <h1 className="logo">Meet Devs</h1>
      <Link to={'/auth'}>
        <Button text="Sign In" size="sm"/>
      </Link>
    </div>
  );
>>>>>>> debe613 (feat: add talent and auth route to client app)
};

export default Navbar;
