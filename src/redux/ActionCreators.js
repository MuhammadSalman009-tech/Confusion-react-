import * as ActionTypes from "./ActionTypes";
import {baseUrl} from "../shared/baseUrl";

//adding single comment from DishDetailComponent
export const addComment=(dishId,comment,author,rating)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishId:dishId,
        comment:comment,
        author:author,
        rating:rating
    }
})

// FETCHING DISHES
export const fetchDishes=()=>(dispatch)=>{
    dispatch(isLoading(true));
    
    return fetch(baseUrl+'dishes')
    .then(res => res.json())
    .then(dishes => dispatch(addDishes(dishes)));
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
// FETCHING DISHES END

// FETCHING COMMENTS
export const fetchComments=()=>(dispatch)=>{
    return fetch(baseUrl+'comments')
    .then(res => res.json())
    .then(comments=> dispatch(addComments(comments)));
}
export const commentsFailed=(errMsg)=>({
    type: ActionTypes.COMMENTS_FAILED,
    payload:errMsg
})
export const addComments=(comments)=>({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

// FETCHING COMMENTS END


// FETCHING PROMOS
export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading());
    
    return fetch(baseUrl+'promotions')
    .then(res => res.json())
    .then(promotions => dispatch(addPromos(promotions)));
}

export const promosLoading=()=>({
    type:ActionTypes.PROMOS_LOADING
})
export const promosFailed=(errMsg)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload:errMsg
})

export const addPromos=(promotions)=>({
    type:ActionTypes.ADD_PROMOS,
    payload:promotions
})
// FETCHING PROMOS END