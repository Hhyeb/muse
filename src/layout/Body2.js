import React from "react";
import "./CSS/Body2.css";
import { FaUserPlus, FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import {useState} from 'react';

export default function Body2(){
    const [isChecked, setMenu] = useState(false);
    const ht1 = () => {
        setMenu(isChecked => !isChecked); // on,off 개념 boolean
    }

    const [isChecked2, setMenu2] = useState(false);
    const ht2 = () => {
        setMenu2(isChecked2 => !isChecked2); // on,off 개념 boolean
    }

    const [isChecked3, setMenu3] = useState(false);
    const ht3 = () => {
        setMenu3(isChecked3 => !isChecked3); // on,off 개념 boolean
    }
    function Followings(){
        window.location.href="/api/members/followings";
    }
        return(
            <div className="who-we-are">
                <div className="title">
                    <h2>Who We Are</h2>
                </div>
                <div className="follow-list">
                    <div className="follow-card">
                        <div className="up">
                            <div onClick={Followings} className="follow-img1"></div>
                            <div onClick={Followings} className="follow-name">@itsme</div>
                            <div className="follow-button">
                                <button className="enter-follow">
                                    <FaUserPlus className="followicon" size="25" color="#FD0054" />
                                </button>
                            </div>
                        </div>
                        <div className="who">
                            <div onClick={Followings} className="p-img1">
                                <img className="img1" alt="followimg" src="img/follow1.png" />   
                             </div>
                        </div>
                        <div className="down">
                            {isChecked ? 
                            <button className="enter-ht">
                                <FaHeart className="followicon" size="30" color="#FD0054" onClick={()=>ht1()}/>
                            </button> :
                            <button className="enter-ht">
                                <FaRegHeart size="30" color="#FD0054" onClick={()=>ht1()}/>
                            </button>    }		
                            <button className="enter-talk">
                                <FaRegComment className="followicon" size="30" color="white" />
                            </button>
                        </div>
                    </div>
                    <div className="follow-card">
                        <div className="up">
                            <div onClick={Followings} className="follow-img2"></div>
                            <div onClick={Followings} className="follow-name">@meow</div>
                            <div className="follow-button">
                                <button className="enter-follow">
                                    <FaUserPlus className="followicon" size="25" color="#FD0054" />
                                </button>
                            </div>
                        </div>
                        <div className="who">
                            <div onClick={Followings} className="p-img1">
                                <img className="img1" alt="followimg" src="img/follow2.png" />   
                             </div>
                        </div>
                        <div className="down">
                            {isChecked2 ? 
                            <button className="enter-ht">
                                <FaHeart className="followicon" size="30" color="#FD0054" onClick={()=>ht2()}/>
                            </button> :
                            <button className="enter-ht">
                                <FaRegHeart size="30" color="#FD0054" onClick={()=>ht2()}/>
                            </button>    }	
                            <button className="enter-talk">
                                <FaRegComment className="followicon" size="30" color="white" />
                            </button>
                        </div>
                    </div>
                    <div className="follow-card3">
                        <div className="up">
                            <div onClick={Followings} className="follow-img3"></div>
                            <div onClick={Followings} className="follow-name">@abcd</div>
                            <div className="follow-button">
                                <button className="enter-follow">
                                    <FaUserPlus className="followicon" size="25" color="#FD0054" />
                                </button>
                            </div>
                        </div>
                        <div className="who">
                            <div onClick={Followings} className="p-img1">
                                <img className="img1" alt="followimg" src="img/follow3.png" />   
                             </div>
                        </div>
                        <div className="down">
                            {isChecked3 ? 
                            <button className="enter-ht">
                                <FaHeart className="followicon" size="30" color="#FD0054" onClick={()=>ht3()}/>
                            </button> :
                            <button className="enter-ht">
                                <FaRegHeart size="30" color="#FD0054" onClick={()=>ht3()}/>
                            </button>    }	
                            <button className="enter-talk">
                                <FaRegComment className="followicon" size="30" color="white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
}