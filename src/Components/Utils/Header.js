import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (

        <Navbar expand="lg">
            <Image src="./logo.png" width="75px"/>
            <Navbar.Brand href="/">Yess! Quiz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="">Home</NavLink>
                    <NavLink to="/link">Link</NavLink>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>

        // <div>
        //     <Navbar style={{ boxShadow: '0 5px 5px rgba(0,0,0,0.1)' }}>
        //         <Container>
        //             <Navbar.Brand href="/">
        //                 <Image src="/logo.png" width="150px" />
        //             </Navbar.Brand>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Nav className="mr-auto mt-2">
        //                     <NavLink className="nav-link" to="/">
        //                         <b className="Brand-font">SoftwaResult</b>
        //                     </NavLink>
        //                 </Nav>
        //                 {/* <Nav hidden={localStorage.getItem('token') ? true : false}>
        //                     <NavLink className="nav-link" activeClassName="active text-primary" to="/SR/About_Us"> About Us </NavLink>
        //                     <NavLink className="nav-link" activeClassName="active text-primary" to="/SR/Contact">Contact</NavLink>
        //                     <NavLink className="nav-link mr-sm-2" activeClassName="active text-primary" to="/SR/Login">Login</NavLink>
        //                 </Nav>
        //                 <Nav hidden={localStorage.getItem('token') ? false : true}>
        //                     <NavLink className="nav-link" activeClassName="active text-primary" to="/SR/Dashboard"> Profile </NavLink>
        //                     <NavLink className="nav-link" activeClassName="active text-primary" onClick={this.logOutUser} to="">Logout</NavLink>
        //                 </Nav> */}
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </div>
    )
}
export default Header;