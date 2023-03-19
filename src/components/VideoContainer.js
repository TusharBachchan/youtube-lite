import React from 'react'
import VideoCard from './VideoCard'
import { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'
import Shimmer from "./Shimmer"
const VideoContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData()


  }, [])
  const fetchData = async () => {
    const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + API_KEY);
    const json = await data.json()
    setData(json)
  }
  if (data.length === 0) return <Shimmer />;
  return (
    
      // <div className='flex flex-wrap gap-7 px-5 py-2 border border-red-900'>
      //   {data.items.map((item) => <VideoCard imgUrl={item?.snippet?.thumbnails?.medium?.url} title={item?.snippet?.title} channelTitle={item?.snippet?.channelTitle} views={item?.statistics?.viewCount} />)}
      // </div>
      <div className='grid grid-cols-4 gap-4 mt-32'>
        {data.items.map((item) => <VideoCard imgUrl={item?.snippet?.thumbnails?.medium?.url} title={item?.snippet?.title} channelTitle={item?.snippet?.channelTitle} views={item?.statistics?.viewCount} id = {item?.id}/>)}
      </div>

  )
}

export default VideoContainer