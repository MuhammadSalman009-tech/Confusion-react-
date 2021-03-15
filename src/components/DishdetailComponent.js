import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";   
function RenderDish({dish}){
        if(dish!==null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top width="100%" src={dish.image}/>
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

    function RenderComments({comments}){
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
        if(props.dish!==null){
            var dish=props.dish;
            var comments=props.comments;
            console.log(comments);
        }else{
            comments=null;
            dish=null;
        }
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
                            {dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={dish}/>
                    <RenderComments comments={comments}/>
                </div>
            </div>
        );
    }

export default Dishdetail;