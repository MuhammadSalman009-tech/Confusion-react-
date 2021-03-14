import { Card, CardBody, CardImg, CardText, CardTitle,} from "reactstrap";
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
        if(props.dish!==undefined){
            var dish=props.dish;
            var comments=dish.comments;
            console.log(comments);
        }else{
            comments=null;
            dish=null;
        }
        return(
            <div className="row">
                <RenderDish dish={dish}/>
                <RenderComments comments={comments}/>
            </div>
        );
    }

export default Dishdetail;