import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import {DISHES} from "../shared/dishes";
import {PROMOTIONS} from "../shared/promotions";
import {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Component } from 'react';
import { Redirect, Route, Switch } from "react-router";

class Main extends Component {
  
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS
    }
  }

  render(){
    const HomePage=()=>{
      return <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
      promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
      leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
      />;
    }
    const DishWithId=({match})=>{
      return <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId))[0]}
      comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId))}/>
    }
      console.log(this.state.selectedDish);
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/contactus" component={Contact}/>
          <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
