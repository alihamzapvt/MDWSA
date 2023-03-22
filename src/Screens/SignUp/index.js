import React from 'react'
import "./style.css"
import abstraction from "../../assets/images/login_img.svg"


function SignUp() {

    const handleSignUp = () => {
        // signInWithEmailAndPassword((auth, email, password))
    }

    return (
        <div className='main_container'>
            <div className='threeD_img'>
                <img src={abstraction} className="signUp_img" />
            </div>
            <div className='form_container'>
                <div style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: "center",
                    height: "100%",
                    flexDirection: "column"
                }}>
                    <form className='signUp_form'>
                        <h2 style={{ alignSelf: "flex-start", marginBottom: "40px" }}>Create Account</h2>
                        <div className='input_cont'>
                            <input placeholder='Full Name' className='input' />
                        </div>
                        <div className='input_cont'>
                            <input placeholder='Email Address' className='input' type={"email"} />
                        </div>
                        <div className='input_cont'>
                            <input placeholder='Password' className='input' type={"password"} />
                        </div>
                        <button className='account_btn' onClick={() => handleSignUp()}>
                            Create Account
                        </button>
                        <div className='account_exist_p'>
                            <p>Already have an account?</p>
                            <a href='#' style={{
                                textDecoration: "none",
                                marginTop: "15px",
                                color: "#7CD2D7",
                            }}>Log in</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp