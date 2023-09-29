import React from 'react';
import "../style/footer.css"
import Logo from '../img/Indian Railways Info.png'
import { Link } from 'react-router-dom';

const Footer = ()=>{
    return (
        <>
        <footer>
        <div class="row">
        <div class="col">
            <img src={Logo} alt="logo" class="logo1"/>
            <p>Welcome to Indian Railways Info.</p>
        </div>
        <div class="col">
            <h3>Office <div class="underline"><span></span></div></h3>
            <p>Itpl Road</p>
            <p>Whitefield, Bangalore</p>
            <p>Karanataka, PIN 560066, India</p>
        </div>
        <div class="col">
            <h3>Links <div class="underline"><span></span></div></h3>
            <ul id="link">
                <li><Link to="/">Home</Link></li>
                <li><a href="">Services</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </div>
        <div class="col">
            <h3>Newsletter<div class="underline"><span></span></div></h3>
            <form id="newsletter">
                <i class="far fa-regular fa-envelope"></i>
                <input type="email" placeholder="Enter email ID"required/>
                <button type="submit"><i class=" fas fa-solid fa-arrow-right"></i></button>
            </form>
            <div class="social-icons">
                <i class="fab fa-brands fa-facebook"></i>
                <a href="https://twitter.com/indianrail93547"><i class="fab fa-brands fa-twitter"></i></a>
                <a href="https://youtube.com/@indianrailwaysinfo937?si=sA2Hv9edo0posLqg"><i class="fab fa-brands fa-youtube"></i></a>
                <i class="fab fa-brands fa-instagram"></i>
            </div>
        </div>
        </div>
        <hr id="footer-line"/>
        <p class="copyright">Indian Railways Info @ 2023 - All Rights Reserved</p>
    </footer>
        </>
    )
}


export default Footer;