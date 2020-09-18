import React, {useState} from 'react';
import {BsFillHeartFill} from "react-icons/bs";
import {BsHeart} from "react-icons/bs";

interface PropCheckboxFav {
    buttonclicked ?: () => void,
    isclicked ?: Boolean,
    setIsclicked ?: object
}

const CheckboxFav : React.FC < PropCheckboxFav >= (props) => {
    const [isclicked,setIsclicked] = useState({isclicked: false});

    const buttonclicked = () => {
        if (isclicked) {
            setIsclicked({isclicked: false})
        } else {
            setIsclicked({isclicked: true})
        }
    }

    return (
        <div onClick={buttonclicked}>
            {isclicked
                ? <BsFillHeartFill className="heart-icon"/>
                : <BsHeart className="heart-icon"/>}

        </div>

    )
}

export default CheckboxFav