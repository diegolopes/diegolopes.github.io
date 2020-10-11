import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'gatsby'

export default function CustomNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <i class="fa fa-code mr-3"></i>   
                <Navbar.Brand>
                    Diego Lopes 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                    <div className="nav-item text-muted"><Link to="/"> Início </Link></div> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
