import React from 'react';
import styles from './video_item.module.css'


const videoItem = ({video, video: { snippet } , onVideoClick}) => 
  <li className={styles.container} onClick={()=>onVideoClick(video)}> 
  <div className={styles.video}>

  <img
    className={styles.thumbnail} 
    src={snippet.thumbnails.medium.url}
    alrt="video thumbnail"/>

    <div className={styles.metadata}>
        <p className={styles.title} >{snippet.title}</p>
        <p className={styles.channel} >{snippet.channelTitle}</p>
    </div>
    </div>
  </li>;

 

export default  videoItem;