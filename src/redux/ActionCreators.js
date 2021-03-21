import * as ActionTypes from "./ActionTypes";
import {DISHES} from "../shared/dishes";

export const addComment=(dishId,comment,author,rating)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishId:dishId,
        comment:comment,
        author:author,
        rating:rating
    }
})

export const fetchDishes=()=>(dispatch)=>{
    dispatch(isLoading(true));
    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);
}

export const isLoading=()=>({
    type:ActionTypes.DISHES_LOADING
})
export const IsFailed=(errMsg)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errMsg
})

export const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
})