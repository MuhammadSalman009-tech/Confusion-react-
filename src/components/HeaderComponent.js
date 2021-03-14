import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Navbar, NavbarBrand, Jumbotron, Nav, Collapse, NavItem, NavbarToggler} from "reactstrap";
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }
    render(){
        return(
        <React.Fragment>
            <Navbar dark expand="md">
            <div className="container">
                <NavbarBrand href="/">
                    <img src="assets/images/logo.png" alt="Restorante Con Fusion" height="30px" width="41px"/>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav}/>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to="/home" className="nav-link">
                                <span className="fa fa-home">Home</span> 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/aboutus" className="nav-link">
                                <span className="fa fa-info">About Us</span> 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/menu" className="nav-link">
                                <span className="fa fa-list">Menu</span> 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contactus" className="nav-link">
                                <span className="fa fa-address-card">Contact Us</span> 
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </React.Fragment>
        );
    }
}

export default Header;