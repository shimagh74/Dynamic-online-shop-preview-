import {changeimagetype, CHANGE_IMAGE, CHANGE_COLOR, clickedtype} from "./actionTypes";

export const changeimage = (data : string) : changeimagetype => ({type: CHANGE_IMAGE, payload: data});

export const clicked = (color : string) : clickedtype => ({type: CHANGE_COLOR, payload: color})