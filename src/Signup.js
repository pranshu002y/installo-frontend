import React, { useState , useEffect } from "react";
import slide1 from "../src/photos/slide1.jpg"
import slide2 from "../src/photos/slide2.jpg"
import slide3 from "../src/photos/slide3.jpg"
import slide4 from "../src/photos/slide4.jpg"
import slide5 from "../src/photos/slide5.jpg"
import light from "../src/photos/insta light.png"
import dark from "../src/photos/insta dark.png"
import facebook from "../src/photos/facbook.png"
import pic3 from "../src/photos/pic3.png"
import pic2 from "../src/photos/pic2.png"
import { useRef } from "react";

import {useNavigate } from "react-router-dom";

import axios from "axios";
import { useToast } from "@chakra-ui/react";
const Signup = ()=>{

    const toast = useToast();
  const toastIdRef = useRef();
  const navigate = useNavigate();

    const [data, setData] = useState({
        userName: "",
        fullname: "",
        email: "",
        password: "",
        bio:"",
        gender:""
      });


      const handleSignUp = async () => {
        try {
          const res = await axios.post("http://localhost:5000/api/user/register", data, {
            headers: { "Content-Type": "application/json" },
          });
          console.log(res);
          if (res.data.error)
            toastIdRef.current = toast({
              description: res.data.error,
              status: "error",
            });
          else {
            toastIdRef.current = toast({
              description: "Account created successfully",
              status: "success",
            });
            navigate("/");
            // localStorage.setItem("token", res.data.token)
          }
        } catch (err) {
          toastIdRef.current = toast({ description: err.message, status: "error" });
        }
      };

      const [slideIndex, setSlideIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
 

  const slide = () => {
    const slideItems = document.querySelectorAll('#slide-content img');
    slideItems.forEach(e => e.classList.remove('active'));
    const newIndex = slideIndex + 1 === slideItems.length ? 0 : slideIndex + 1;
    setSlideIndex(newIndex);
    slideItems[newIndex].classList.add('active');
  };

  useEffect(() => {
    const interval = setInterval(slide, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  useEffect(()=>{
    handleSignUp()
  },[])

    return(
        <div className={`container ${isDarkMode ? 'dark' : ''}`}>
      <div className="main-container">
        <div className="main-content">
          <div className="slide-container">
            <div className="slide-content" id="slide-content">
              <img src={slide1} alt="slide image" className={slideIndex === 0 ? 'active' : ''} />
              <img src={slide2} alt="slide image" className={slideIndex === 1 ? 'active' : ''} />
              <img src={slide3} alt="slide image" className={slideIndex === 2 ? 'active' : ''} />
              <img src={slide4} alt="slide image" className={slideIndex === 3 ? 'active' : ''} />
              <img src={slide5} alt="slide image" className={slideIndex === 4 ? 'active' : ''} />
            </div>
          </div>
          <div className="form-container">
            <div className="form-content box">
              <div className="logo">
                <img src={light} alt="Instagram logo" className="logo-light" />
                <img src={dark} alt="Instagram logo" className="logo-dark" />
              </div>
              <div className="signin-form" id="signin-form">
                <div className="form-group">
                  <div className="animate-input">
                   
                    <input type="text" name="username" value={data.fullname} onChange={(e)=> setData({...data,fullname:e.target.value})} placeholder={"full name"} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="animate-input">
                   
                    <input type="text" name="username" value={data.userName} onChange={(e)=> setData({...data,userName:e.target.value})} placeholder={"user name"} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="animate-input">
                   
                    <input type="text" name="username" value={data.email} onChange={(e)=> setData({...data,email:e.target.value})} placeholder={"email"} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="animate-input">
                   
                    <input type="text" name="username" value={data.password} onChange={(e)=> setData({...data,password:e.target.value})} placeholder={"password"} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="animate-input">
                   
                    <input type="text" name="username" value={data.bio} onChange={(e)=> setData({...data,bio:e.target.value})} placeholder={"bio"} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="animate-input">
                   
                    <input type="password" name="password" value={data.gender} onChange={(e)=> setData({...data,gender:e.target.value})} placeholder={"gender"} />
                    
                  </div>
                </div>
                <div className="btn-group">
                  <button className="btn-login" id="signin-btn" 
         
                  onClick={handleSignUp}
                  >
                   Sign Up
                  </button>
                </div>
                <div className="divine">
                  <div></div>
                  <div>OR</div>
                  <div></div>
                </div>
                <div className="btn-group">
                  <button className="btn-fb">
                    <img src={facebook} alt="facebook logo" />
                    <span>
                      <a href="https://www.facebook.com/">Log in with Facebook</a>
                    </span>
                  </button>
                </div>
                <a href="https://www.instagram.com/accounts/password/reset/" className="forgot-pw">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="box goto">
              <p onClick={()=>navigate("/")}>
                Sign In
              </p>
            </div>

            <div className="app-download">
              <p>Get the app.</p>
              <div className="store-link">
                <a href="https://www.apple.com/in/app-store/">
                  <img src={pic2} alt="app store" />
                </a>
                <a href="https://play.google.com/store">
                  <img src={pic3} alt="google play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <a href="https://about.instagram.com/">About</a>
          <a href="https://about.instagram.com/en_US/blog">Blog</a>
          <a href="https://about.instagram.com/about-us/careers">Jobs</a>
          <a href="https://help.instagram.com/">Help</a>
          <a href="https://developers.facebook.com/docs/instagram">API</a>
          <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0">Privacy</a>
          <a href="https://help.instagram.com/581066165581870">Terms</a>
          <a href="https://www.instagram.com/directory/profiles/">Top Accounts</a>
          <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
          <a href="https://www.instagram.com/explore/locations/">Locations</a>
        </div>
        <div className="copyright">
          © 2021 Instagram from Facebook
        </div>
      </div>
    </div>
    )
}
export default Signup;