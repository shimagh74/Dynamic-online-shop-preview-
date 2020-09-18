import {createStore, applyMiddleware} from 'redux';
import {reducer} from "./reducer/statusReducer";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {changeimagetype} from './action/actionTypes';

export type AppState = ReturnType < typeof reducer >;

export const store = createStore(reducer, applyMiddleware(thunk as ThunkMiddleware < AppState, changeimagetype >));
