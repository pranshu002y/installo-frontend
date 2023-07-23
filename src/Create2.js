import React, { useState } from 'react';

const Create2 = () => {
  const [imagePre, setImagePre] = useState(null);

  // Function to handle updating the image URL
  const handleImageChange = (event) => {
    const imageUrl = event.target.value;
    console.log(imageUrl); // Log the image URL to the console
    setImagePre(imageUrl);
  };

  return (
    <div className='lets'>
      <div style={{ display: "flex" }}>
        <img
          src={imagePre}
          style={{ width: "60%", height: "60vh", objectFit: "cover" }}
          alt=''
        />
        <div style={{ marginLeft: 20, width: "40%" }}>
          <div style={{ display: 'flex', alignItems: "center" }}>
            <img
              src={""}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                objectFit: "cover"
              }}
              alt=''
            />
            <p style={{ marginLeft: 10, fontWeight: 600, fontSize: 16 }}>
              madan khadka
            </p>
          </div>
          <textarea
            type='text'
            name='text'
            id='text'
            placeholder='Write a status for post'
            className='textinputforpost'
          />
          <button className='createpost'>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Create2;
