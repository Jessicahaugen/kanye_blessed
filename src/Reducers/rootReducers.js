import React from 'react'
import { combineReducers } from "redux";
import quoteReducer from './quoteReducer'
import nameReducer from './nameReducer'

 const rootReducers = combineReducers({
     quoteReducer,
     nameReducer,
    })
export default rootReducers