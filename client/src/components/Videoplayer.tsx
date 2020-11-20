import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/style.css';
import YouTube from 'react-youtube';


function Videoplayer (props: any) {

  const [broadcast, setBroadcast] = useState<any>({});

  // Set broadcast object as state
  useEffect ( () => {
    setBroadcast(props.broadcast);
  }, [props.broadcast]);

  // Function to reload page / get new video at end of current video
  const reload = (event: any) => {
    if (event.data === 0) window.location.reload();
  };

  //Define YouTube player options and assign start time from state
  const opts: any = {
    height: '100%',
    width: '100%',
    playerVars: {
      'enablejsapi': 1,
      'playsinline': 1,
      'webkit-playsinline': 1,
      'autoplay': 1,
      'start': broadcast.currentTime,
    },
  }

  return (
    <YouTube containerClassName={'videoplayer'} onStateChange={reload} videoId={broadcast.currentVideo} opts={opts} />
  )
}

export default Videoplayer;