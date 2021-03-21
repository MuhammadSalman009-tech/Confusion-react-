import {createStore, combineReducers, applyMiddleware} from "redux";
import {Dishes} from "./Dishes";
import {Promotions} from "./Promotions";
import {Leaders} from "./Leaders";
import {Comments} from "./Comments";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore=()=>{
    const store=createStore( 
       combineReducers({
           comments:Comments,
           leaders:Leaders,
           promotions:Promotions,
           dishes:Dishes,
       }),
       applyMiddleware(thunk,logger)
        );
    return store;
}