import React from "react";
import './Header.css';
import { FaSearch, FaComment, FaUserAlt, FaPen, FaBars } from "react-icons/fa";
import {useState} from 'react';

export default function Header(){
    function HomeClick(e){
        window.location.href="/";
    }
    function SearchClick(e){
        window.location.href="/search";
    }
    function WriteClick(e){
        window.location.href="/write";
    }
    function UserClick(e){
        window.location.href="/user";
    }
    function TalkClick(e){
        window.location.href="/talk";
    }
    function ProductList(){
        window.location.href="/productlist";
    }
    const [isOpen, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }
        return(
            <div className="container">
                <div className="app-header">
                    <div className="c1img">
                        <img onClick={HomeClick} className="museimg" alt="muse" src="img/muse.png" />
                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder="search..." ></input>
                        <button onClick={SearchClick}>
                            <FaSearch className="searchicon" size="20" color="black" />
                        </button>
                    </div>
                    <div className="icon">
                        <div className="pen">
                            <button onClick={WriteClick}>
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
                        <li onClick={ProductList}><p className="woman">여성의류</p></li>
                        <li onClick={ProductList}><p className="man">남성의류</p></li>
                        <li onClick={ProductList}><p className="shoe">신발</p></li>
                        <li onClick={ProductList}><p className="bag">가방</p></li>
                        <li onClick={ProductList}><p className="fashion">패션 악세사리</p></li>
                        <li onClick={ProductList}><p className="case">폰케이스 / 테크</p></li>
                      </div>
                    </ul>
                </div>
            </div>
        );
}
