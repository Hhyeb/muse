import React from "react";
import './CSS/Header.css';
import { FaSearch, FaComment, FaUserAlt, FaPen, FaBars } from "react-icons/fa";
import {useState} from 'react';

export default function Header(){
    function HomeClick(e){
        window.location.href="/";
    }
    function SearchClick(e){
        window.location.href="/search";
    }
    function posts(e){
        window.location.href="/api/members/posts";
    }
    function UserClick(e){
        window.location.href="/user";
    }
    function TalkClick(e){
        window.location.href="/talk";
    }
    function Category(){
        window.location.href="/api/categories";
    }
    const [isOpen, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }
        return(
            <div className="container">
                <div className="app-header">
                    <div className="c1img">
                        <div onClick={HomeClick} className="museimg">MUSE</div>
                        
                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder="search..." ></input>
                        <button onClick={SearchClick}>
                            <FaSearch className="searchicon" size="20" color="black" />
                        </button>
                    </div>
                    <div className="icon">
                        <div className="pen">
                            <button onClick={posts}>
                                <FaPen className="penicon" size="25" color="black" />
                            </button>
                        </div>
                        <div className="user">
                            <button onClick={UserClick}>
                                <FaUserAlt className="usericon" size="25" color="black" />
                            </button>
                        </div>
                        <div className="talk">
                            <button onClick={TalkClick}>
                                <FaComment className="talkicon" size="25" color="black" />
                            </button>
                        </div>
                        
                    </div>
                    <div className="list">
                        <FaBars onClick={()=>toggleMenu()} className="listicon" size="25" color="black" />
                    </div>
                    <ul className={isOpen ? "show-menu" : "hide-menu"}>
                      <div className='list-catalog'>
                        <li onClick={Category}><p className="woman">My Page</p></li>
                        <li onClick={Category}><p className="man">Product</p></li>
                        <li onClick={Category}><p className="shoe">Magazine</p></li>
                        <li onClick={Category}><p className="bag">Customer Service</p></li>
                        <li onClick={Category}><p className="fashion">Notice</p></li>
                        <li onClick={Category}><p className="case">폰케이스 / 테크</p></li>
                      </div>
                    </ul>
                </div>
            </div>
        );
}
