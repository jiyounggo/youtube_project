import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'

// const VideoList = (props,videos) => (
//   <ul className={styles.videos}> 
//     {props.videos.map(video => (
//       <VideoItem key={video.id} video={video} />
//     ))}
//   </ul>
// );

// export default VideoList;


const VideoList = ({videos,onVideoClick}) => (
  <ul className={styles.videos}> 
    {videos.map(video => (
      <VideoItem key={video.id} video={video} onVideoClick={onVideoClick}/>
    ))}
  </ul>
);

export default VideoList;
