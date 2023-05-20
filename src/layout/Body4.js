import React from "react";
import './CSS/Body4.css';

class Body4 extends React.Component{
    render(){
        return(
            <div className="style">
                <h2>Styling<br></br> Recommendation</h2>
                <div className="style-list">
                    <ul className="inner-frame">
                        <li className="inner1">
                            <div className="style1-line">
                                <div className="style-img"> 
                                    <div className="hat"></div>
                                </div>
                                <div className="down">
                                    <h3 className="title">Blue Hat</h3>
                                    <div className="content">content of hat</div>
                                </div>
                            </div>
                        </li>
                        <li className="inner2">
                            <div className="style2-line">
                                <div className="style-img"> 
                                    <div className="jacket"></div>
                                </div>
                                <div className="down">
                                    <h3 className="title">Jacket</h3>
                                    <div className="content">content of jacket</div>
                                </div>
                            </div>
                        </li>
                        <li className="inner3">
                            <div className="style3-line">
                                <div className="style-img"> 
                                    <div className="shirt"></div>
                                </div>
                                <div className="down">
                                    <h3 className="title">T-shirt</h3>
                                    <div className="content">content of T-shirt</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="model">
                    <div className="model-img"></div>
                </div>
                <div className="style-list2">
                    <ul className="inner-frame2">
                        <li className="inner4">
                            <div className="style4-line">
                                <div className="style-img"> 
                                    <div className="glass"></div>
                                </div>
                                <div className="down">
                                    <h3 className="title">Glass</h3>
                                    <div className="content">content of glass</div>
                                </div>
                            </div>
                        </li>
                        <li className="inner5">
                            <div className="style5-line">
                                <div className="style-img"> 
                                    <div className="pants"></div>
                                </div>
                                <div className="down">
                                    <h3 className="title">Pants</h3>
                                    <div className="content">content of pants</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Body4;