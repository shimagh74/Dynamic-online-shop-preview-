import styles from './Circlecolor.module.css';
import React from 'react';
import {connect} from "react-redux";
import {AppState} from '../../redux/_store';
import {Expense} from '../../redux/action/actionTypes';
import {bindActionCreators, Dispatch} from 'redux';
import {changeimage} from '../../redux/action/statusAction';

interface Circlecolor {
    colors : Expense["colors"],
    sizecircel : string
}
type Props = Circlecolor & LinkStateProps & LinkDispatchProps;

const Circlecolor : React.FC < Props > = (props) => {

    return (
        <div className={styles.color_content}>
            {props
                .colors
                .map(color => <div className={styles.color_cir} onClick={() => props.changeimage(color.name)}>
                    <div className={`${color.name} ${props.sizecircel}`}></div>
                </div>)}
        </div>
    )
}
interface LinkStateProps {
    colors : Expense["colors"];
}
interface LinkDispatchProps {
    changeimage : (data : string) => void;
}

const mapStateToProps = (state : AppState) : LinkStateProps => ({colors: state.colors});

const mapDispatchToProps = (dispatch : Dispatch) : LinkDispatchProps => ({
    changeimage: bindActionCreators(changeimage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Circlecolor)
