import React from "react";
import './Header.css';
import Searchdata from "./Searchdata.json";
import { useState } from "react";
import { FaSearch, FaComment, FaUserAlt, FaPen } from "react-icons/fa";

export default function Header(){
        return(
            <div className="container">
                <div className="app-header">
                    <div className="c1img">
                        <img className="museimg" alt="muse" src="img/muse.png" />
                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder="search..." ></input>
                        <button>
                            <FaSearch className="searchicon" size="20" color="black" />
                        </button>
                    </div>
                    <div className="icon">
                        <div className="pen">
                            <button>
                                <FaPen className="penicon" size="25" color="black" />
                            </button>
                        </div>
                        <div className="user">
                            <button>
                                <FaUserAlt className="usericon" size="25" color="black" />
                            </button>
                        </div>
                        <div className="talk">
                            <button>
                                <FaComment className="talkicon" size="25" color="black" />
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
}
