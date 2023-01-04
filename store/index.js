import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({ todo: todoReducer });

const store = configureStore({ reducer: rootReducer });
export default store;
