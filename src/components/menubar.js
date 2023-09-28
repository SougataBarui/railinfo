import React from "react";
import Logo from '../img/Indian Railways Info.png'
import "../style/menubar.css"
import { Link } from 'react-router-dom';

const Menubar=()=>{
    return(
        <>
        <div class="menu-bar">
      <img src={Logo} alt=""/>
      <h1 class="logo">Indian Railways<span>Info</span></h1>
      <ul>
        <li><Link to="/"><a href="">Home</a></Link></li>
        <li><Link to="/Zones"><a href="">Zones</a></Link></li>
        <li><a href="#">Locomotives</a>
        </li>
        <li><a href="#">Wagons</a>
        </li>
        <li><a href="#">Major Stations</a>
        </li>
        <li><a href="#">Signals</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
        </>
    )
}



export default Menubar;