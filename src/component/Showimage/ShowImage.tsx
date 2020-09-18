import React from 'react';
import {connect} from "react-redux";
import blue from "../../Assets/blue-dress.png";
import pink from "../../Assets/pink-dress.png";
import purple from "../../Assets/purple-dress.jpg";
import yellow from "../../Assets/yellow-dress.jpg";
import {AppState} from '../../redux/_store';
import {bindActionCreators, Dispatch} from 'redux';
import {clicked} from '../../redux/action/statusAction';

interface ShowImageProps {
    setImage : string;
}

type Props = ShowImageProps & LinkStateProps & LinkDispatchProps;

const ShowImage : React.FC < Props > = (props) => {
var src;
    const checkcer=()=>{ 
        if(props.setImage==="blue"){
            return src=blue;
        }
        else if(props.setImage==="yellow"){
            return src=yellow;
        }
        else if(props.setImage==="purple"){
            return src=purple;
        }
        else if(props.setImage==="pink"){
            return src=pink;
        }
    }
    return (
        <div>
          <div className="row main-pic_1">
                <img src={`${checkcer()}`} 
             alt="teen summer Rice" className="main-pic"/>
            </div>
        </div>
    )
}
interface LinkStateProps {
    setImage : string
}
interface LinkDispatchProps {
    changeimage : (data : string) => void;
}
const mapStateToProps = (state : AppState) : LinkStateProps => ({setImage: state.setImage});

const mapDispatchToProps = (dispatch : Dispatch) : LinkDispatchProps => ({
    changeimage: bindActionCreators(clicked, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowImage)
