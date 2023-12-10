import React, { useEffect, useState } from "react";
import "./Profile.css";
import Gallery from "../src/Gallery";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from 'axios';

export default function Profile() {
  const navigate = useNavigate(); // Move the declaration to the top
  // const res = await axios.get('http://localhost:5000/api/user/upload/post/get', {
  const [data, setData] = useState();

  const getimage = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/user/post', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res);
      localStorage.setItem('userDetails', JSON.stringify(res.data));
      setData(res.data);
    } catch (err) {
      console.log(err);
      if (err.request.status === 500) {
        navigate('/signin');
      }
    }
  };

  useEffect(() => {
    getimage();
  }, []);

  console.log(data);

  
  return (
    <div>
      <div className="homepage-box-container">
                <div>
                    <div className="homepage-navbar">
                        <Navbar/>
                    </div>
                </div>
        </div>
      <div>
        <div className="homesubcontainer">
          <div className="Profilerightbar">
            <div className="subProfilerightbar">
              <div>
                <img
                  src={data && data.ppLink}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginLeft: 100 }}>{data && data.userName}</p>
                  <button
                    style={{
                      paddingLeft: 10,
                      marginLeft: 20,
                      paddingRight: 20,
                      paddingTop: 8,
                      paddingBottom: 8,
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Edit profile
                  </button>
                  <img src={"https://i.pinimg.com/originals/4d/e3/b0/4de3b0d729c8740204f76a2bfe1d5d7a.png"} style={{marginLeft:20 , cursor:"pointer", width:"50px"}} alt="" onClick={()=>navigate("/homepage/more")}/>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginLeft: 100 }}>1 Post</p>
                  <p style={{ marginLeft: 40 }}>200k Followers</p>
                  <p style={{ marginLeft: 40 }}>10k Following</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginLeft: 100, marginTop: 10 }}>
                {data && data.bio}
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
      <div className='postContainerForProfile'>
                  <Gallery/>
              </div>
    </div>
  );
}
