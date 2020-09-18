import React from 'react';
import styles from "../../component/pic_left_button/Pic_left_button.module.css"
interface picProps {
    pic:string
}
const Pic_left_button:React.FC<picProps> = (props) => {
    return (<img src={props.pic} className={styles.mainpic}/>)
}

export default Pic_left_button
