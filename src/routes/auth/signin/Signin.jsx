import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { Container } from "../../../utils/Container";
import GoogleIcon from "../../../assets/Frame.svg";
import { instanse } from "../../../api/instanse";
import { useNavigate } from "react-router-dom";

import "./Signin.scss"
const Signin = () => {
  const navigate=useNavigate();

  const [userData , setUserData]=useState({
    email:"",
    password:""
  });
  console.log(userData);
  const createUser=(e)=>{
    e.preventDefault();
    instanse.post("/auth/login",userData)
    .then(response=>//console.log(response))
      {
      if(response=true){
        navigate("/")
      }

    }
    )
    .catch(err=>console.log(err))

  }

  return (
    <main>
    <Container>
      <div className="sign h-100">
        <div className=" regiter__wrapper d-flex w-100">
          <NavLink to="/">
            <Logo />
          </NavLink>
         
        </div>
        <h2 className="text-center sign__title">Hello</h2> 
        <p className="d-flex justify-content-center pt-5">
        Sign in to eBay or  <NavLink  className="ms-2" to="/register"> create an account </NavLink>
          </p>
        <div className="sign__form d-flex mt-3 align-items-center justify-content-center">
          <form className="formm pt-3" onSubmit={createUser} >
            <div className="form-row  gap-4 form__sign">
              <div className="form-group  col-12">
                <input
                  type="email"
                  className="form-control mb-4"
                  // id="inputAddress"
                  placeholder="Email or username"
                  // onSubmit={createUser}
                  onChange={e =>{setUserData({...userData ,email:e.target.value})}} 
                />
                  
              </div>
             
            </div>
            <div className="form-row  gap-4 form__sign">
              <div className="form-group  col-12">
                <input
                  type="password"
                  className="form-control mb-4"
                  // id="inputAddress"
                  placeholder="Email or username"
                    // onSubmit={createUser} 
                  onChange={e =>{setUserData({...userData ,password:e.target.value})}} 
                
                />
              </div>
             
            </div>
           
            <p className="form_p ">Created your account with a mobile number?  <a href="/" className=""> Sign in with mobile</a></p>
            <button type="submit" className="btn w-100 mt-3 btn-primary"  >
            Continue
            </button>
          </form>
          <button  className="google__sign d-flex align-items-center" >
            {/* onClick={createUserGoogle} */}
            <img src={GoogleIcon} alt="" />
            <p>Continue with Google</p>
          </button>
        </div>
      </div>

      <div className="footerr mt-auto">
        
        <p>Copyright © 1995-2023 eBay Inc. All Rights Reserved.
Accessibility
,
User Agreement
,
Privacy
,
Payments Terms of Use
,
Cookies
,
Your Privacy Choices
and
AdChoice</p>
      </div>
    </Container>
  </main>
  )
}

export default Signin