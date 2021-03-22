import {createStore, combineReducers, applyMiddleware} from "redux";
import {Dishes} from "./Dishes";
import {Promotions} from "./Promotions";
import {Leaders} from "./Leaders";
import {Comments} from "./Comments";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore=()=>{
    const store=createStore( 
       combineReducers({
           comments:Comments,
           leaders:Leaders,
           promotions:Promotions,
           dishes:Dishes,
           ...createForms({
            feedback: InitialFeedback
        })
       }),
       applyMiddleware(thunk,logger)
        );
    return store;
}