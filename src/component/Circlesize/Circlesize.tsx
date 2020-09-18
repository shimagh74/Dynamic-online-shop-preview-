import React from 'react';
import styles from './Circlesize.module.css';
import {connect} from "react-redux";
import {AppState} from '../../redux/_store';
import {Expense} from '../../redux/action/actionTypes';

interface PropSize {
    sizes : Expense["sizes"];
    center : string
}

const Size : React.FC < PropSize >= (props) => {
    return (
        <div className={styles.size_content}>
            {props
                .sizes
                .map(item => {
                    return (
                        <div className={styles.size_cir}>
                            <div className={`${item.size} ${props.center}`}>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    )
                })
}
        </div>
    );
}

interface LinkStateProps {
    sizes : Expense["sizes"];
}

const mapStateToProps = (state : AppState) : LinkStateProps => ({sizes: state.sizes});

export default connect(mapStateToProps)(Size)
