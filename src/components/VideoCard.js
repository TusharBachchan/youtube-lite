import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ imgUrl, title, channelTitle, views, id }) => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden">
      <Link to={`/watch?v=${id}`}>
        <img src={imgUrl} alt="" className="rounded-2xl cursor-pointer" />
      </Link>
      <div className="p-4">
        <Link to={`/watch?v=${id}`}>
          <h2 className="text-lg font-semibold cursor-pointer">
            {title}
          </h2>
        </Link>
        <h3 className="text-sm text-gray-600">{channelTitle}</h3>
        <h3 className="text-sm text-gray-600">{views} views</h3>
      </div>
    </div>
  );
};

export default VideoCard;

