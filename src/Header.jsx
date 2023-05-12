import React from "react"
import App from "./App"
import "./Header.css"
import {catOption } from './user';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
const Header = () => {

    const dispatch = useDispatch();

    const handler = (val) => {
        dispatch(catOption({catoption:val }));
    }

   
    return ( 
        <div>
        <div style={{ backgroundColor: '#002E6B', padding: "13px",color: "white",borderRadius: "3px",fontSize: "18px" }}>
            <div className="header">
                <div>HR Chat Bot</div>
                    <div className="close">
                        <button style={{color: "white",backgroundColor : "#002E6B",borderColor:"#002E6B"}} onClick={()=>{

                        }}>X</button>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Header
