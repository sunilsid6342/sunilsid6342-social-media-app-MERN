import { combineReducers } from "redux";

import authReducer from "./authReducer";
import PostReducer from "./PostReducer"
export const reducer=combineReducers({authReducer,PostReducer})