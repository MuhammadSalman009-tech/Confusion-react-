import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Label, Button} from 'reactstrap';
import {Link} from "react-router-dom"
class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            telnum:"",
            email:"",
            agree:false,
            contactType:"tel",
            message:""
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target=event.target;
        const value=target.type==="checkbox"?target.checked:target.value;
        const name=target.name;

        this.setState({
            [name]:value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("current state is: "+JSON.stringify(this.state));
        alert("current state is: "+JSON.stringify(this.state));
    }
    
    render(){
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        Contact Us
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr/>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="/"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

            {/* form */}
            <div className="row">
                <div className="col-12">
                    <h3>Send your Feedback</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="row">
                            <div className="col-md-2">
                                <Label htmlFor="firstname">First Name</Label>
                            </div>
                            <div className="col-md-10">
                                <Input type="text" name="firstname" id="firstname" placeholder="First Name"
                                onChange={this.handleInputChange}
                                value={this.state.firstname}/>
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <div className="col-md-2">
                                <Label htmlFor="lastname">Last Name</Label>
                            </div>
                            <div className="col-md-10">
                                <Input type="text" name="lastname" id="lastname" placeholder="Last Name"
                                onChange={this.handleInputChange}
                                value={this.state.lastname}/>
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <div className="col-md-2">
                                <Label htmlFor="telnum">Contact tel.</Label>
                            </div>
                            <div className="col-md-10">
                                <Input type="tel" name="telnum" id="telnum" placeholder="Tel. number"
                                onChange={this.handleInputChange}
                                value={this.state.telnum}/>
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <div className="col-md-2">
                                <Label htmlFor="email">Email</Label>
                            </div>
                            <div className="col-md-10">
                                <Input type="email" name="email" id="email" placeholder="Email"
                                onChange={this.handleInputChange}
                                value={this.state.email}/>
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <div className="col-md-6 offset-2">
                                <FormGroup check>
                                    <Label htmlFor="agree" check>
                                        <Input type="checkbox" name="agree" id="agree" 
                                        onChange={this.handleInputChange}
                                        value={this.state.agree}/>
                                        <strong>May we Contact You?</strong>
                                    </Label>
                                </FormGroup>
                            </div>
                            <div className="col-md-3 offset-1">
                                <Input type="select" name="contactType" id="contactType"
                                onChange={this.handleInputChange}
                                value={this.state.contactType}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </div>
                            
                        </FormGroup>
                        <FormGroup className="row">
                            <div className="col-md-2">
                                <Label htmlFor="message">Your Feedback</Label>
                            </div>
                            <div className="col-md-10">
                                <Input type="textarea" name="message" id="message" rows="10"
                                onChange={this.handleInputChange}
                                value={this.state.message}></Input>
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <div className="col-md-10 offset-2">
                                <Button type="submit" color="primary"> 
                                    Send Feedback
                                </Button>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
            </div>{/* form */}
        </div>
    );
}
}

export default Contact;