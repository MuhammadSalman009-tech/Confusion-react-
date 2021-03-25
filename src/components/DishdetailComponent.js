import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";   
import React, { Component } from "react";
import {Modal, ModalHeader, ModalBody, Label, Button, Row, Col} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId,values.comment,values.author,values.rating);
    }  
    render(){
        return(
            <React.Fragment>
                <button onClick={this.toggleModal} className="btn btn-outline-secondary"><span className="fa fa-edit"></span> Submit Comment</button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                            />
                                        <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row> 
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                    submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>    
            </React.Fragment>
            
        )
    }
}
function RenderDish({dish}){
        if(dish!==null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top width="100%" src={baseUrl+dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }else{
            return(
                <div></div>
            )
        }
    }

    function RenderComments({comments,addComment,dishId}){
        if(comments!==null){
            return(
                <div className="col-12 col-md-5">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map(item=>{
                            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                            const date=new Date(item.date);
                            const day=date.getDate();
                            const month=date.getMonth();
                            const year=date.getFullYear();
                            return(
                                <li key={item.id}>
                                    <p>{item.comment}</p>
                                    <p>--{item.author}, {months[month]} {day}, {year}</p>
                                </li>
                            );
                    })}
                    <CommentForm addComment={addComment} dishId={dishId}/>
                    </ul>
                </div>
            );
        }else{
            return(
                <div></div>
            )
        }
    }


    
    
    const Dishdetail=(props)=>{
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            )
        }else if(props.errMsg){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMsg}</h4>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                {props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish}/>
                        <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id}/>
                    </div>
                </div>
            );
        }
        
    }

export default Dishdetail;