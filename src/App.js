import React, { useEffect, useState } from 'react';
import './App.css';
import VideoList from './component/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  console.log(videos)
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAzZLkdsdKDNayq4Txz0z5wE4jeFCH55N0%20", requestOptions)
      .then(response => response.json())
      .then(result =>setVideos(result.items))
      .catch(error => console.log('error', error));
  },[])

  return (
    <div>
    <VideoList videos={videos}/>
    
    </div>
  );
}

export default App;
