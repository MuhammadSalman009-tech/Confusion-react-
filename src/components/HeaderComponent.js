import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Navbar, NavbarBrand, Jumbotron, Nav, Collapse, NavItem, NavbarToggler,
Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from "reactstrap";
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen: false
        }
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

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
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button color="primary" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
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
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                innerRef={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={(input) => this.password = input}  />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                innerRef={(input) => this.remember = input}  />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
        );
    }
}

export default Header;