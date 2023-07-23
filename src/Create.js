import React, { useState, useEffect } from "react";
import "./Create.css";
import Homeicon from "../src/Icons/home.png";
import SearchIcon from "../src/Icons/Search.png";
import Exploreicon from "../src/Icons/Explore.png";
import Messages from "../src/Icons/Messenger.png";
import Notifications from "../src/Icons/Notifications.png";
import createicon from "../src/Icons/New post.png";
import Instragramicon from "../src/Icons/Instagram.png";
import More from "../src/Icons/Settings.png";
import Iconsfromcreatemodal from "../src/Icons/Icon to represent media such as images or videos.png";
import InstagramIcon from "../src/Icons/Instagramlogo.png";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [imagepre, setImagePre] = useState(null);

  const [isOpen, setIsOpen] = useState(true);

  

  const handleImageUpload = async (event) => {
    try {
      const files = event.target.files;
      if (!files || files.length === 0) {
        throw new Error("No file selected");
      }
  
      const formData = new FormData();
  
      // Loop through each file and append it to the FormData object
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }
  
      formData.append("upload_preset", "ml_default");
  
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dzvxsgooe/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
  
      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }
  
      const data = await response.json();
  
      // Add the new image URL to the array
      setImageUrl((prevImage) => [...prevImage, data.secure_url]);
      console.log(data.secure_url)
      console.log(imageUrl,"hii this img urls");
  
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="eventpopup">
        <div className="AddDepartment_desc">
          <span>Create a New Post</span>
          <div className="addDepartment_form">
            <div>
              <div className="img-pl">
                <img src={Iconsfromcreatemodal} alt="" />
                <p
                  style={{
                    fontWeight: "600",
                    marginLeft: "-40px",
                    fontSize: 18,
                  }}
                >
                  Drag photos and videos here
                </p>
                <label htmlFor="file">
                  <div
                    style={{
                      backgroundColor: "#0095F6",
                      paddingLeft: 25,
                      marginLeft: -10,
                      borderRadius: 4,
                    }}
                  >
                    <p style={{ paddingTop: "6px", paddingBottom: "7px" }}  onClick={() => handleImageUpload()}>
                      Select from computer
                    </p>
                  </div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



