import {createStore, combineReducers} from "redux";
import {Dishes} from "./Dishes";
import {Promotions} from "./Promotions";
import {Leaders} from "./Leaders";
import {Comments} from "./Comments";

export const ConfigureStore=()=>{
    const store=createStore( 
       combineReducers({
           comments:Comments,
           leaders:Leaders,
           promotions:Promotions,
           dishes:Dishes,
       })
        );
    return store;
}