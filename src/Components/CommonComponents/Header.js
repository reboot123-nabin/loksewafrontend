import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="header-nav">
                <NavLink to="/" className="logo"> Yess! Quiz</NavLink>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" id="icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul className="header-ul pt-3">
                    <li>
                        <NavLink to="/" activeClassName="selected">HOME </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us">CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">LOGIN</NavLink>
                    </li>
                    <li>
                        <NavLink to="/registration">REGISTER</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;