import React from "react";
import "./CSS/Body.css";
import { FaCaretRight } from "react-icons/fa";


class Body extends React.Component{
    render(){
        function Category(){
            window.location.href="/api/categories";
        }
        return(
            <div className="app-body">
                <div className="c2img">
                    <img className="homeimg" alt="home" src="img/home.png" />   
                </div>
                <div className="what-we-made">
                    <div className="we-made-top">
                        <div className="title"><h2>What<br></br> We Made</h2></div>
                        <div className="btn">
                            <button onClick={Category} className="more-btn">
                                <FaCaretRight className="moreicon" size="20" color="gray" />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div onClick={Category} className="card1">
                            <h3>Clothes for Her</h3>
                        </div>
                        <div onClick={Category} className="card2">
                            <h3>Clothes for Him</h3>
                        </div>
                        <div onClick={Category} className="card3">
                            <h3>Clothes for Accessories</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Body;