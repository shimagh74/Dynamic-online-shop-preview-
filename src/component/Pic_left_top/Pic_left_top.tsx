import React from 'react';
import styles from "../../component/Pic_left_top/Pic_left_top.module.css"
interface picProps {
    pic:string
}
const Pic_left_top:React.FC<picProps>= (props) => {
    return (<img src={props.pic} className={styles.mainpic}/>)
}

export default Pic_left_top
