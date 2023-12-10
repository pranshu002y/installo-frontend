import React, { useState, useEffect } from "react";
import PostElement from "./PostElement";
import test_pp_icon from "./photos/1.jpg";
import kalra from "../src/photos/kalra.jpg";
import ap from "../src/photos/ap.jpg";
import bsdka from "../src/photos/bsdka.jpg";
import saru from "../src/photos/saru.jpg";
import test_post_video from "./posts/beautiful-nature-view-status-video-with-song-natureshort-shorts-854-ytshorts.savetube.me.mp4";
import axios from 'axios';

function PostArea() {
  const [data, setData] = useState();
  const [post, setPost] = useState();
  const getimage = async () => {
       
		try {
			const res = await axios.get('http://localhost:5000/api/user/getuserall', {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
      console.log(res)
      localStorage.setItem('userDetails', JSON.stringify(res.data))
      setData(res.data)
		
	
		} catch (err) {
			console.log(err)
			if (err.request.status === 500) {
				
			}
		}
	}
	useEffect(()=>{
		getimage()
	},[])

  const getposts = async () => {
       
		try {
			const res = await axios.get('http://localhost:5000/api/user/upload/post/get', {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
      console.log(res)
      localStorage.setItem('userDetails', JSON.stringify(res.data))
      setPost(res.data)
		
	
		} catch (err) {
			console.log(err)
			if (err.request.status === 500) {
				
			}
		}
	}
	useEffect(()=>{
		getposts()
	},[])

console.log(data);
console.log(post);
  return (
    <div>
  {data && post && data.length > 0 && post.length > 0 && data.map((e, i) => (
    post.length > i && (
      <PostElement
        key={i}
        media={post[i].image_url}
        likeCount="10"
        profilePicture={bsdka}
        time="6s"
        username={e.userName}
        explanation="growing age..."
      />
    )
  ))}
</div>

  );
}

export default PostArea;
