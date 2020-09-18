import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Circlecolor from './component/Circlecolor/Circlecolor';
import Circlesize from './component/Circlesize/Circlesize';
import {FaShoppingCart} from "react-icons/fa";
import {FaAngleLeft} from "react-icons/fa";
import {AiFillClockCircle} from "react-icons/ai";
import pic_3 from "./Assets/2.jpg"
import CheckboxFav from './component/CheckboxFav/CheckboxFav';
import Buttonorder from './component/Buttonorder/Buttonorder';
import Dropdownmenu from './component/Dropdown/Dropdown';
import ShowImage from './component/Showimage/ShowImage';
import Pic_left_top from './component/Pic_left_top/Pic_left_top';
import pic from "./Assets/1.jpg";
import Pic_left_button from './component/pic_left_button/pic_left_button';
import TextH from "./component/TextH/TextH";
import {Provider} from 'react-redux';
import {store} from './redux/_store'

const App: React.FC = (props) => {

        return (
            <Provider store={store}>
                <div className="App">
                    <div className="container">
                        <div className="row ">
                            <div className="col box">
                                <div className="navbar top-nav">
                                    <FaShoppingCart className="bg-icon_ShoppingCart"/>
                                    <TextH>Teen summer Rice
                                    </TextH>
                                    <FaAngleLeft className="bg-icon_AngleLeft"/>
                                </div>
                                <ShowImage/>
                                <TextH>Color</TextH>
                                <div className=" bg-color">
                                    <Circlecolor sizecircel="sizecircel" />
                                </div>
                                <TextH>Size</TextH>
                                <div className=" bg-size">
                                    <Circlesize center="center"/>
                                </div>
                                <Buttonorder/>
                            </div>
                            <div className="col  box">
                                <div className="navbar top-nav">
                                    <Dropdownmenu/>
                                    <TextH>Summer collection
                                    </TextH>
                                    <FaAngleLeft className="bg-icon"/>
                                </div>
                                <div className="main_box">
                                    <div className="row bg-icon category_time">
                                        <AiFillClockCircle className="clock-icon"/>
                                        <h5 className="time_now">Today</h5>
                                    </div>
                                    <p className="clock_now">11:30 AM</p>
                                    <Pic_left_top pic={pic}/>
                                    <h4 className="main_title">
                                        <CheckboxFav/>
                                        <p className="text_p">
                                            Teen summer Rice</p>
                                    </h4>
                                    <h5 className="time_now">Today</h5>
                                    <p className="clock_now">10:20 AM</p>
                                    <Pic_left_button pic={pic_3}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }


export default App;
