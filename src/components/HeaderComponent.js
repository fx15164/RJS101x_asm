import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    render() {
        return (
            <div className="container">
                <Navbar dark color='primary' expand="md">
                    <NavbarBrand href="/home">
						<img src='/assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse navbar isOpen={this.state.isNavOpen}>
                        <Nav className="me-auto" navbar >
                            <NavItem>
                                <NavLink className='nav-link' to="/nhanvien">
                                    <i className="fa fa-users" aria-hidden="true"></i>&nbsp;Nhân viên
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to="/phongban">
                                    <i className="fa fa-address-card" aria-hidden="true">&nbsp;</i>Phòng ban
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to="/bangluong">
                                    <i className="fa fa-table" aria-hidden="true"></i>&nbsp;Bảng lương
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;
