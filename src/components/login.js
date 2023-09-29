import React from "react";
import "../style/login.css"
import Back from "../img/l1.jpg"

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
                <input type="submit" value="Sign in" name="" />
              </div>
              <div className="inputBx">
                <p>
                  Don't have an account? <a href="#">Sign up</a>
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