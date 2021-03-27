import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";
import {FadeTransform} from "react-animation-components";
function RenderCard({item,isLoading,errMsg}){

    if(isLoading){
        return(
            <Loading/>
        )
    }else if(errMsg){
        return(
            <h4>{errMsg}</h4>
        )
    }else{
        return(
            <FadeTransform in 
            transformProps={{
                exitTransform:"scale(0.5) translateY(-50%)"
            }}
            >
                <Card>
                    <CardImg src={baseUrl+item.image} alt={item.name} height="350px"/>
                    <CardBody>
                        <CardTitle>
                            <h4>{item.name}</h4>
                        </CardTitle>
                        {item.designation ? <CardSubtitle><h5>{item.designation}</h5></CardSubtitle>:null}
                        <CardText>
                            {item.description}
                        </CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
    
}

function Home(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}
                    isLoading={props.dishesLoading}
                    errMsg={props.dishesErrMsg}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMsg={props.promoErrMsg}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    );
}
export default Home;