import {CHANGE_IMAGE} from "../action/actionTypes";
import yellow from "../../Assets/download.png";
import blue from "../../Assets/blue-dress.png";
import pink from "../../Assets/pink-dress.png";
import purple from "../../Assets/purple-dress.jpg";
import {Expense, changeimagetype} from '../../redux/action/actionTypes'

const initialState : Expense = {

    setImage: "yellow",
    sizes: [
        {
            name: "S",
            size: "small"
        }, {
            name: "M",
            size: "medium"
        }, {
            name: "L",
            size: "large"
        }, {
            name: "XL",
            size: "xlarge"
        }
    ],
    colors: [
        {
            name: "blue",
            img: blue
        }, {
            name: "pink",
            img: pink

        }, {
            name: "yellow",
            img: yellow

        }, {
            name: "purple",
            img: purple
        }
    ]
};

export const reducer = (state = initialState, action : changeimagetype) => {
    switch (action.type) {
        case CHANGE_IMAGE:
            return {
                ...state,
                setImage: action.payload
            }
        default:
            return state
    }
}