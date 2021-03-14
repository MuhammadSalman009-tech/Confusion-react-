import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import {DISHES} from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Component } from 'react';

class Main extends Component {
  
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    }
  }
  onDishSelect(dishId){
    this.setState({
        selectedDish:dishId
    })
}

  render(){
      console.log(this.state.selectedDish);
    return (
      <div>
        <Header/>
        <div className="container">
            <Menu dishes={this.state.dishes} onClick={(dishId)=>{this.onDishSelect(dishId)}}/>
            <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main;
