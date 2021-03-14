import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import {DISHES} from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Component } from 'react';
import { Redirect, Route, Switch } from "react-router";

class Main extends Component {
  
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
    }
  }

  render(){
    const HomePage=()=>{
      return <Home/>;
    }
      console.log(this.state.selectedDish);
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
