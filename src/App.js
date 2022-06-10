import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './component/video_list/video_list';
import SearchHeader from './component/search_header/search_header';
import VideoDetail from './component/video_detail/video_detail';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAzZLkdsdKDNayq4Txz0z5wE4jeFCH55N0%20`, requestOptions)
      .then(response => response.json())
      .then(result =>result.items.map(item => ({...item,id: item.id.videoId})))
      .then(items =>setVideos(items))
      .catch(error => console.log('error', error));
  }
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
    <div className={styles.app}>
    <SearchHeader onSearch={search} />
    <section className={styles.content}>
      {selectedVideo && (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
      )}
      <div className={styles.list}>
        <VideoList
          videos={videos}
          onVideoClick={selectVideo}
          display={selectedVideo ? 'list' : 'grid'}
        />
      </div>
    </section>
  </div>
  );
}
export default App;
