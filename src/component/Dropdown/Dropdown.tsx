import React, {useState} from 'react';
import {BsFilter} from "react-icons/bs";
import styles from "./Dropdown.module.css"


interface PropDropdownmenu {
    buttonclicked ?: () => void,
    isclicked?:boolean,
    setIsclicked?:object
}

const Dropdownmenu : React.FC < PropDropdownmenu > =(props)=> {
    const [isclicked, setIsclicked] = useState( false); 
    

    const buttonclicked = () => {
        if (isclicked) {
            setIsclicked(false)
        } else {
            setIsclicked( true)
        }
    }

          return (
            <div className={styles.dropdowncontainer} onClick={buttonclicked}>
                <BsFilter className="bg-bsfilter"/>
                <div
                    className={`${styles.dropdownmenu} ${isclicked
                    ? styles.show
                    : styles.hiden}`}>
                    <ul className={styles.dropdownmenuContent}>
                        <li>Contact</li>
                        <li>about</li>
                        <li>Exit</li>
                    </ul>
                </div>
            </div>

        )
   
}

export default Dropdownmenu