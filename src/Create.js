import React, { useState } from "react";
import axios from "axios";
import "./Create.css";
import { useNavigate } from "react-router-dom";
import Iconsfromcreatemodal from "../src/Icons/Icon to represent media such as images or videos.png";
const Create = () => {
  const [imageUrl, setImageUrl] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    userName:""
  });

  const handleImageupload = async (event) => {
    try {
      const files = event.target.files;
      if (!files || files.length === 0) {
        throw new Error("No file selected");
      }

      setLoading(true);

      const formData = new FormData();
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

      setImageUrl((prevImage) => [...prevImage, data.secure_url]);
      console.log(data.secure_url);

      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    navigate("/homepage");
    if (imageUrl.length === 0) {
      console.error("No image to save");
      return;
    }

    try {
      const def = {
        image_url: imageUrl[0],
        userName:data.userName,
        // Adjust this if you want to handle multiple images
      };

      // Make an API call to send the image URL to the backend
      const response = await axios.post(
        "http://localhost:5000/api/user/upload/post",
        def
      );

      // Handle the response from the backend
      console.log("Save operation complete", response.data);

      // Redirect to the homepage
      navigate("/homepage");
    } catch (err) {
      console.error(err, "Save operation failed");
    }
  };

  console.log(data, "author");

  return (
    // <div>
    //   <input
    //     type="file"
    //     className="input-email"
    //     id="passwordInput"
    //     placeholder="Enter your text"
    //     name="image_url"
    //     onChange={handleImageupload}
    //     required
    //   />

    //   <div className="input-margin">
    //     <input
    //       type="text"
    //       className="input-email"
    //       id="emailInput"
    //       placeholder="Enter your text"
    //       value={data.userName}
    //       onChange={(e) => setData({ ...data, userName: e.target.value })}
    //     />
    //   </div>

    //   <div className="save-it">
    //     <button onClick={handleSave} disabled={imageUrl.length === 0 || loading}>
    //       Post Image
    //     </button>
    //   </div>
    //   {loading && <p>Hang On Image is being uploaded ...</p>}
    // </div>

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
            <p style={{ paddingTop: "6px", paddingBottom: "7px" }}  onClick={() => handleImageupload()}>
              Select from computer
            </p>
          </div>
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            onChange={handleImageupload}
            style={{ display: "none" }}
          />
        </label>
        <div className="input-margin">
       <input
         type="text"
        className="input-email"
         id="emailInput"
         placeholder="Enter your text"
       value={data.userName}
       onChange={(e) => setData({ ...data, userName: e.target.value })}
       />
       </div>
        <div className="save-it">
         <button  style={{ paddingTop: "6px", paddingBottom: "7px", backgroundColor: "#0095F6",
              paddingLeft: 25,
              marginLeft: -10,
              borderRadius: 4, }} onClick={handleSave} disabled={imageUrl.length === 0 || loading}>
          Post Image
      </button>
      </div>
      {loading && <p>Hang On Image is being uploaded ...</p>}
      </div>
    </div>
  </div>
</div>
</div>

);
}

export default Create;
