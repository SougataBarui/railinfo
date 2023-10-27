import React from "react";
import "../style/about.css";
import "../style/locomotives.css";

const cardImages = document.querySelectorAll(".card-image");
const cardTitles = document.querySelectorAll(".card-title");
const cardDescriptions = document.querySelectorAll(".card-description");
const cardMediaIcons = document.querySelectorAll(".card-mediaIcons a");
const cardImgs = document.querySelectorAll(".card-image img");
const cardTitleSpans = document.querySelectorAll(".card-title span");
const cardDescSpans = document.querySelectorAll(".card-description span");
const mediaIcons = document.querySelectorAll(".card-mediaIcons a i");

const renderCard = () => {
  //Remove the skeleton loading effect
  cardImages.forEach((cardImage) => {
    cardImage.classList.remove("loading");
  });
  cardTitles.forEach((cardTitle) => {
    cardTitle.classList.remove("loading");
  });
  cardDescriptions.forEach((cardDescription) => {
    cardDescription.classList.remove("loading");
  });
  cardMediaIcons.forEach((cardMediaIcon) => {
    cardMediaIcon.classList.remove("loading");
  });

  //Show the hidden html elements
  cardImgs.forEach((cardImg) => {
    cardImg.style.visibility = "visible";
  });
  cardTitleSpans.forEach((cardTitleSpan) => {
    cardTitleSpan.style.visibility = "visible";
  });
  cardDescSpans.forEach((cardDescSpan) => {
    cardDescSpan.style.visibility = "visible";
  });
  mediaIcons.forEach((mediaIcon) => {
    mediaIcon.style.visibility = "visible";
  });
}

//Execute renderCard on setTimeout
setTimeout(() => {
  renderCard();
}, 1000);



const About=()=>{
    return(
        <>
        <div class="cover">
        <img src="../img/aboutus.jpg" alt=""/>
        <div id="text">
        
        </div>
    </div>
        <div class="company">
          <div class="img">
            <img src="../img/about (1).jpg" alt=""/>
          </div>
          <div class="company-info">
            <span>INDIAN <span class="our">RAILWAYS INFO</span></span>
            <p>
              <b>Indian Railways Info</b> is a user-friendly digital platform designed to provide a wide range of 
              essential information and services related to the Indian Railways. It serves as a one-stop destination 
              for passengers, travelers, and rail enthusiasts, offering convenient access to accurate and up-to-date 
              details. 
            </p>
          </div>
        </div>
        <div class="team"><span>OUR TEAM</span></div>
        <div class="container">
          <div class="card">
            <div class="card-image loading"><img src="../img/sougata.jpg" alt="" /></div>
            <div class="card-info">
              <h3 class="card-title loading"><span>Sougata <span class="yellow-surname">Barui</span></span></h3>
              <p class="card-description loading">
                <span class="personal-info">
                  <span class="info">Team and Coding Lead</span><br/>
                  Pursuing BSc(CS) (Chandigarh University) <br/>
                  Email: <a href="mailto:'sougatabarui12@gmail.com'">sougatabarui12@gmail.com</a>
                </span>
              </p>
              <div class="card-mediaIcons">
                <a href="#" class="loading" target="on_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="loading" target="on_blank"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-image loading"><img src="../img/shubham.jpg" alt="" /></div>
            <div class="card-info">
              <h3 class="card-title loading"><span>Shubham <span class="yellow-surname">Kundu</span></span></h3>
              <p class="card-description loading">
                <span class="personal-info">
                  <span class="info">Designer</span> <br/>
                  Pursuing BSc(CS) (Chandigarh University) <br/>
                  Email: <a href="mailto:'harshsunwani11@gmail.com'">nikhilkundu2002@gmail.com</a>
                </span>
              </p>
              <div class="card-mediaIcons">
                <a href="#" class="loading" target="on_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="loading" target="on_blank"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-image loading"><img src="../img/harender.jpeg" alt="" /></div>
            <div class="card-info">
              <h3 class="card-title loading"><span>Harender <span class="yellow-surname">Chauhan</span></span></h3>
              <p class="card-description loading">
                <span class="personal-info">
                  <span class="info">Data Collection</span> <br/>
                  Pursuing BSc(CS) (Chandigarh University) <br/>
                  Email: <a href="#">sharender214@gmail.com</a>
                </span>
              </p>
              <div class="card-mediaIcons">
                <a href="#" class="loading" target="on_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="loading" target="on_blank"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default About;