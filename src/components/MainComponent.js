import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from "react-router";
import {connect} from "react-redux";
import {postComment,fetchDishes, fetchComments, fetchPromos} from "../redux/ActionCreators"
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from "react-transition-group";



const mapDispatchToProps=(dispatch)=>({
      postComment:(dishId,comment,author,rating)=>dispatch(postComment(dishId,comment,author,rating)),
      fetchDishes:()=>{dispatch(fetchDishes())},
      fetchComments:()=>{dispatch(fetchComments())},
      fetchPromos:()=>{dispatch(fetchPromos())},
      resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
})

const mapStateToProps= state=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    leaders:state.leaders,
    promotions:state.promotions,
  }
}
class Main extends Component {
  
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  render(){
    const HomePage=()=>{
      return <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
      dishesLoading={this.props.dishes.isLoading}
      dishesErrMsg={this.props.dishes.errMsg}
      promotion={this.props.promotions.promotions.filter((promo)=>promo.featured)[0]}
      promoLoading={this.props.promotions.isLoading}
      promoErrMsg={this.props.promotions.errMsg}
      leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
      />;
    }
    const DishWithId=({match})=>{
      return <Dishdetail dish={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId))[0]}
      isLoading={this.props.dishes.isLoading}
      errMsg={this.props.dishes.errMsg}
      comments={this.props.comments.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId))}
      commentsErrMsg={this.props.comments.errMsg}
      postComment={this.props.postComment}/>
    }
      console.log(this.props.selectedDish);

    return (
      <div>
        <Header/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage}/>
              <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}/>
              <Route path="/menu/:dishId" component={DishWithId}/>
              <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
              <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders}/>}/>
              <Redirect to="/home"/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
