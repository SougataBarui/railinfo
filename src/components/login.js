import React from "react";
import "../style/login.css"
import Back from "../img/l1.jpg"
import { Link } from "react-router-dom";

const Login=()=>{

  
    return(
        <>
        <section>
        <div className="imgBx">
          <img src={Back} alt="" />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>Login</h2>
            <form>
              <div className="inputBx">
                <span>Username</span>
                <input
                  type="text"
                  name="username"
                  
                  
                />
              </div>
              <div className="inputBx">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  
                  
                />
              </div>
              <div className="remember">
                <label>
                  <input type="checkbox" name="remember" /> Remember me
                </label>
              </div>
              <div className="inputBx">
                <button type="Submit" >Sign in</button>
             </div>

              <div className="inputBx">
                <p>
                  Don't have an account? <Link to="/Signup"><a href="#">Sign up</a></Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
        </>
    );
    };
    export default Login;