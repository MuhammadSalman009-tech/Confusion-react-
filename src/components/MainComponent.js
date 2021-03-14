import {Navbar, NavbarBrand} from "reactstrap";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import {DISHES} from "../shared/dishes";
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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              Restorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
            <Menu dishes={this.state.dishes} onClick={(dishId)=>{this.onDishSelect(dishId)}}/>
            <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
        </div>
      </div>
    );
  }
}

export default Main;
