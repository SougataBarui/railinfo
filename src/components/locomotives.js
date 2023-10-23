import React from "react";
import "../style/locomotives.css";
import "../style/content.css";
import { Link } from 'react-router-dom';
const Loco=()=>{
    return(
        <>
        <div class="cover">
        <img src="../img/loco.jpg" alt=""/>
        <div id="text">
        <h1>INDIAN RAILWAY LOCOMOTIVES</h1>
        <p>The Indian Railways primarily operates a fleet of electric and diesel locomotives, along with several compressed natural gas (CNG) locomotives.</p>
        </div>
    </div>


    <div class="container">
      <div class="image">
        <img src="../img/elec.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="conten">
        <h3>ELECTRIC LOCOMOTIVES</h3>
       
        <a href="#"><Link to="/Elecloco">Indian Railways uses various types of electric locomotives to power its trains across the electrified
           rail network. These locomotives are designed for both passenger and freight services and are categorized 
           based on their power output, wheel arrangement, and other features.</Link></a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>
    


    <div class="container">
      <div class="image">
        <img src="../img/Diesel.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="conten">
        <h3>DIESEL LOCOMOTIVES</h3>
        
        <a href="../skeleton/dieselloco.html">Indian Railways operates a wide range of diesel locomotives to power trains across its extensive 
          network. These diesel locomotives are designed for various purposes, including passenger, freight, and shunting 
          services. As a result, the use of diesel locomotives may decrease on certain routes as electrification 
          progresses.</a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>
        </>
    )
}
export default Loco;