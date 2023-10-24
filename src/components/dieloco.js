import React from "react";
import "../style/locomotives.css";
import "../style/content.css";
import { Link } from 'react-router-dom';
const Dieloco=()=>{
    return(
        <>
        <div class="cover">
        <img src="../img/diecover.jpg" alt=""/>
        <div id="text">
        <h1>DIESEL LOCOMOTIVES</h1>
        <p>The Indian Railways primarily operates a fleet of electric and diesel locomotives, along with several compressed natural gas (CNG) locomotives.</p>
        </div>
    </div>


    <div class="container">
      <div class="image">
        <img src="../img/mixdie.jpg" alt="Image" style={{ width: '100%' }}/>
      </div>
      <div class="content">
        <h3>MIXED CLASS</h3>
        
        <a href="#"><Link to="/Mixdie">A "mixed" locomotive, in the context of Indian Railways, typically refers to a locomotive that can be used with both goods (freight) and passengers trains.</Link></a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>


    <div class="container">
        <div class="image">
          <img src="../img/passdie.jpg" alt="Image" style={{ width: '100%' }}/>
        </div>
        <div class="content">
          <h3>PASSENGER CLASS</h3>
         
          <a href="#"><Link to="/Passdie">A "passenger" locomotive, in the context of Indian Railways, typically refers to a locomotive that can only be used with passengers trains.</Link></a>
        </div>
        <div class="spacer"></div>
  
      </div>
      <hr class="bodyline"/>


      <div class="container">
        <div class="image">
          <img src="../img/goodsdie.jpg" alt="Image" style={{ width: '100%' }}/>
        </div>
        <div class="content">
          <h3>GOODS CLASS</h3>
          <a href="#"><Link to="/Goodsdie">A "goods" locomotive, in the context of Indian Railways, typically refers to a locomotive that is mainly used with goods trains and sometimes with passenger trains.</Link></a>
           </div>
        <div class="spacer"></div>
  
      </div>
      <hr class="bodyline"/>


      <div class="container">
        <div class="image">
          <img src="../img/shunterdie.jpg" alt="Image" style={{ width: '100%' }}/>
        </div>
        <div class="content">
          <h3>SHUNTER CLASS</h3>
          <a href="#"><Link to="/Shundie">A "shunter" locomotive, in the context of Indian Railways, typically refers to a locomotive that is mainly used to shunt trains.</Link></a>
           </div>
        <div class="spacer"></div>
  
      </div>
      <hr class="bodyline"/>
        </>
    )
}
export default Dieloco;