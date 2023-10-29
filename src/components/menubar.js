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
      <ul class="menu">
        <li><Link to="/"><a href="">Home</a></Link></li>
        <li><Link to="/Zones"><a href="">Zones</a></Link></li>
        <li><Link to="/Loco"><a href="#">Locomotives</a></Link>
        </li>
        <li><Link to="/Wagon"><a href="#">Wagons</a></Link>
        </li>
        <li><Link to="/Station"><a href="#">Major Stations</a></Link>
        </li>
        <li><Link to="/Signal"><a href="#">Signals</a></Link></li>
        <li><Link to="/About"><a href="#">About</a></Link></li>
      </ul>
    </div>
        </>
    )
}



export default Menubar;