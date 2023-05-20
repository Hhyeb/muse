import React from "react";
import "./CSS/Body3.css";

class Body3 extends React.Component{
    render(){
        function magazine(){
            window.location.href="/api/magazine";
        }
        return(
            <div className="magazine">
                <h2>Magazine<br></br> in the Muse</h2>
                <div className="magazine-list">
                    <ul className="inner-frame">
                        <li onClick={magazine} className="inner1">
                            <div className="line1">
                            <div className="magazine1-line">
                                <div className="magazine-img"> 
                                    <div className="img1"></div>
                                </div>
                                <div className="down">
                                    <h3 className="title">Muse Collection Launch</h3>
                                    <p className="content">News write-ups offer a 
                                    great way to let clients know about new products 
                                    and services, events, awards, and more!</p>
                                </div>
                            </div>
                            </div>
                        </li>
                        <li onClick={magazine} className="inner2">
                            <div className="line1">
                            <div className="magazine1-line">
                                <div className="magazine-img">
                                    <div className="img2"></div>    
                                </div>
                                <div className="down">
                                    <h3 className="title">Clothing Upcycling 2023</h3>
                                    <p className="content">News write-ups offer a 
                                    great way to let clients know about new products 
                                    and services, events, awards, and more!</p>
                                </div>
                            </div>
                            </div>
                        </li>
                        <li onClick={magazine} className="inner3">
                            <div className="line1">
                            <div className="magazine1-line">
                                <div className="magazine-img">
                                    <div className="img3"></div>
                                </div>
                                <div className="down">
                                    <h3 className="title">F/W 2024 Sneak Peek</h3>
                                    <p className="content">News write-ups offer a 
                                    great way to let clients know about new products 
                                    and services, events, awards, and more!</p>
                                </div>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Body3;