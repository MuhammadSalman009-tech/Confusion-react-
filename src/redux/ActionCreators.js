import * as ActionTypes from "./ActionTypes";

export const addComment=(dishId,comment,author,rating)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishId:dishId,
        comment:comment,
        author:author,
        rating:rating
    }
})