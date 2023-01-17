import React from 'react';
import './Nav.css';
import image from './brand.svg';
import { useEffect } from 'react';
// eslint-disable-next-line
import { animateScroll as scroll } from 'react-scroll'

export function Nav() {


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll >= 150) {
            document.getElementById("nav-image").classList.add("sticky");
            document.getElementById("brand").classList.add("brand-sticky");
        } else {
            document.getElementById("nav-image").classList.remove("sticky");
            document.getElementById("brand").classList.remove("brand-sticky");
        }
    }



    return (
        <>
            <div className="nav" >
            </div >
            <div className="nav-image" id='nav-image' >
                <img className="image" src={image} id='brand' alt="navimage" />
            </div>
            <div className="nav"  >
            </div >
        </>
    )
}

export default Nav;