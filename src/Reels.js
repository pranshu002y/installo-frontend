import React,{useState,useEffect} from "react";
import "./Search.css"
import "./reels.css"

const Reels = ()=>{
    
    const [entry, setentry] = useState();
    const [reels,setReels] = useState();
    useEffect(()=>{ 
        fetch("https://api.unsplash.com/photos/?client_id=lCRj-Mv0lFa6C2e5D1KntRtPIviTnTt1en2VCePfzU8")
        .then(r =>r.json())
        .then(post =>setReels(post))
        console.log(reels)
    },[])
    
const handleVideoClick = (event) => {
  const video = event.target;
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

return (
  <div className="lets">
  <div className="app__videos">
    {reels && reels.map((e)=>{
      return(
    <div className="video">

      <div className="videoHeader">
        <span className="material-icons"> {e.user.instagram_username} </span>
        <h3>Reels</h3>
        <span className="material-icons"> {e.likes} </span>
      </div>

      <img className="video__player" src={e.urls.raw}/>

      <div className="videoFooter">
        <div className="videoFooter__text">
          <img className="user__avatar" src={e.user.profile_image.small} alt="" />
          <h3>{e.instagram_username}<button>Follow</button></h3>
        </div>

        <div className="videoFooter__ticker">
          <span className="material-icons"> {e.alt_description} </span>
          {/* <div>Song Name</div> */}
        </div>

        {/* <div className="videoFooter__actions">
          <div className="videoFooter__actionsLeft">
            <span className="material-icons"> favorite </span>
            <span className="material-icons"> mode_comment </span>
            <span className="material-icons"> send </span>
            <span className="material-icons"> more_horiz </span>
          </div>
          <div className="videoFooter__actionsRight">
            <div className="videoFooter__stat">
              <span className="material-icons"> favorite </span>
              <p>12</p>
            </div>
            <div className="videoFooter__stat">
              <span className="material-icons"> mode_comment </span>
              <p>20</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>)})}

    
  </div>
  </div>


        
    )
}
export default Reels;

