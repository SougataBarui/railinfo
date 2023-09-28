import React from "react";
import "../style/home.css"
import "../style/content.css"
import '../img/index1.jpg'
import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <>
    
        <div class="cover1">
        <img src="../img/index1.jpg" alt=""/>
            <div id="text1">
            <h1>WELCOME TO,<br/>INDIAN RAILWAYS INFO</h1>
             <p>Hello RailFans,<br/> Welcome to the place where every details of<br/> 
              Indian Railways is available. If you are new here<br/><br/>
              <a id="signup" href="#">Sign Up</a>OR<Link to="/Login"><a id="login"  href="#">Log In</a></Link></p>
            </div>
        </div>


        <div class="container">
      <div class="image">
        <img src="../img/news1.jpg" alt="Image"  style={{ width: '100%' }} />
      </div>
      <div class="content">
        
        <a href="#">Vande Bharat Express update: Indian Railways revises stoppages and timing of country’s 
          8th semi-high speed train – Check routes, frequency, timetable</a>
      </div>
      <div class="spacer"></div>

    </div>
    <hr class="bodyline"/>


    <div class="container">
      <div class="image">
        <img src="../img/news2.jpg" alt="Image"  style={{ width: '100%' }}/>
      </div>
      <div class="content">
        
        <a href="#">Indian Railways latest update: Ashwini Vaishnaw, Dharmendra Pradhan to flag off 
          Bhubaneswar-New Delhi-Bhubaneswar Rajdhani Express with Tejas rakes</a>
      </div>
      
      <div class="spacer"></div>
    </div>
    <hr class="bodyline"/>
        </>
    )
}



export default Home;