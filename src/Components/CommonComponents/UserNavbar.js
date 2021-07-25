import React from 'react'
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';

const UserNavbar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavLink to="/profile">
                        <Navbar.Brand href="#home">
                            <img
                                src="/logo512.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{position:"absolute",right:"7.5%"}}>
                            <NavLink to="/profile"> <FaIcons.FaUser title="Profile" style={{fontSize:"15pt"}} /></NavLink>
                            <NavLink to="/notifications"><FaIcons.FaBell title ="Notification" style={{fontSize:"15pt"}} /> </NavLink>
                            <NavLink to="/logout"><FaIcons.FaSignOutAlt title="Log out" style={{fontSize:"15pt"}}/> </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default UserNavbar;