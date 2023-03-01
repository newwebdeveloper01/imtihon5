import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { Container } from "../../../utils/Container";
import GoogleIcon from "../../../assets/Frame.svg";
import {instanse} from "../../../api/instanse";
import { useDispatch } from "react-redux";
// import { auth , provider } from "./firebase/firebase";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
const Register = () => {
  const navigate=useNavigate();
  const dispatch =useDispatch();
  const [userData , setUserData]=useState({
    name:"",
    password:"",
    email:"",
    avatar:"https://www.google.com/imgres?imgurl=https%3A%2F%2Foir.mobi%2Fuploads%2Fposts%2F2022-08%2F1661338443_5-oir-mobi-p-pustoi-fon-vkontakte-6.png&imgrefurl=https%3A%2F%2Foir.mobi%2F711720-pustoj-fon.html&tbnid=dcWC_dGjir-tJM&vet=12ahUKEwjjjISz4rj9AhUCuyoKHQhcBwkQMygMegUIARD7AQ..i&docid=_9hBTlXkAXDrAM&w=920&h=720&q=avatar&hl=ru&ved=2ahUKEwjjjISz4rj9AhUCuyoKHQhcBwkQMygMegUIARD7AQ"
  });
  const createUser=(e)=>{
    e.preventDefault();
    instanse.post("/users",userData)
    .then(response=>{
      if(response.data.email){
        dispatch({email:response.data.email , type:"CREATE_USER"})
        navigate("/")
      }
    })
    .catch(err=>console.log(err))

  }
  // const createUserGoogle=()=>{
  //   auth.signInWithPopup(provider)
  //   .then(response=>console.log(response))
  //   .catch(err=>console.log(err))
  // }
  // console.log(userData);
  return (
    <main>
      <Container>
        <div className="register h-100">
          <div className=" regiter__wrapper d-flex  w-100">
            <NavLink to="/">
              <Logo />
            </NavLink>
            <p className=" pt-5">
              Already a member? <NavLink to="/signin">Sign in</NavLink>
            </p>
          </div>
          <h2 className="text-center register__title">Create an account </h2>
          <div className="register__form d-flex align-items-center justify-content-center">
            <form className="form" onSubmit={createUser}>
              <div className="form-row d-flex gap-4 form__register">
                <div className="form-group  col-2">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="First name"
                    onChange={e =>{setUserData({...userData ,name:e.target.value})}}
                  />
                </div>
                <div className="form-group col-2">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Last name"
                    
                  />
                </div>
              </div>
              <div className="form-group col-md-4">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  onChange={e =>{setUserData({...userData ,email:e.target.value})}}
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  onChange={e =>{setUserData({...userData ,password:e.target.value})}}

                />
              </div>

              <p className="form_p ">By Creating an account, you agree to our <a href="/" className="d-flex">User </a>  <a href="/" className="d-flex"> Agreement</a> and acknowledge reading our <a href="/" className="d-flex">User</a> <a href="/" className="d-flex"> Privacy Notice .</a></p>
              <button type="submit" className="btn w-100 mt-3 btn-primary">
                Sign in
              </button>
            </form>
            <button  className="google__register d-flex align-items-center">
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
  );
};

export default Register;
