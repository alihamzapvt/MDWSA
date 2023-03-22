import React from "react";
import "./style.css";

export default function Login() {
  return (
    <>
      <main>
        <div id="login_form">
          <div id="login_data">
            {/* <h3>MDWSA</h3> */}
            <h1>Sign In</h1>
            <div id="input_1">
              <input type="email" placeholder="Email" />
            </div>
            <div id="input_2">
              <input type="password" placeholder="Password" />
              <div id="password">
                <p>Forget Password?</p>
              </div>
            </div>

            <div id="login_button">
              <button>
                Sign In
                {/* <span style={{ fontSize: "15" }}>&#8594;</span> */}
              </button>
            </div>
            <p id="login_para">
              I don't have an account?{" "}
              <span style={{ color: "#7CD2D7" }}>Sign In</span>
            </p>
          </div>
        </div>
        <div id="side_picture"></div>
      </main>
    </>
  );
}
