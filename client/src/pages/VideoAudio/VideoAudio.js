import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import Widget from "./Widget";

const VideoAudio = () => {
  const [url, setUrl] = useState("");
  const [widget, setWidget] = useState(null)
  const searchUrl = () => {
    // console.log(url.substring(17,28));
    if (url) {
      axios
        .get(`https://api.vevioz.com/api/widget/mp3/${url.substring(17, 28)}`)
        .then((res) => {
          // console.log(res.data);
          setWidget(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("url is empty");
    }
  };
  return (
    <>
     
      <main style={{ margin:"200px 10px", display:"block"}}>
        <div>
            <span
              id="blackOverlay"
              className=""
            ></span>
          </div>
          <div>
          <SearchBar url={url} setUrl={setUrl} searchUrl={searchUrl} />
        </div>
        <Widget widgetData={widget} /> 
      </main>
    </>
  );
};

export default VideoAudio;
