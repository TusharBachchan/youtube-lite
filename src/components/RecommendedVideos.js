import { Link } from 'react-router-dom'
import React from 'react'

const RecommendedVideos = ({ imgUrl, title, channelTitle, views, id }) => {
  return (
    <div class = "video-container flex p-0.5">
        <div className="img-container w-1/2 p-1">
              <Link to={`/watch?v=${id}`}><img src={imgUrl} alt="" className='rounded-xl cursor-pointer' /></Link>
        </div>
        <div className="channel-details w-1/2 p-1">
              <div className="title font-semibold">{title}</div>
              <div className="channel-title">{channelTitle}</div>
              <div className="views">{views}</div>
        </div>
    </div>
  )
}

export default RecommendedVideos
