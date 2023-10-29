import React from "react";
import "../style/login.css";
import { Link } from 'react-router-dom';
import Front from "../img/sign.jpg"
const Signup=()=>{
    return(
        <>
         <section>
        <div className="imgBx">
          <img src={Front} alt="" />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>Sign up</h2>
            <form>
              <div className="inputBx">
                <span>Username</span>
                <input type="text"name=""/>
              </div>
              <div className="inputBx">
                <span>Email</span>
                <input type="email"name=""/>
              </div>
              <div className="inputBx">
                <span>Password</span>
                <input type="password" name=""/>
              </div>
              
              <div className="inputBx">
                <input type="submit" value="Sign Up" name="" />
              </div>
              <div className="inputBx">
                <p>
                  Have an account? <Link to="/Login"><a href="#">Sign in</a></Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
        </>
    )
}

export default Signup;