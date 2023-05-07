import React from 'react'
import ProfileLogo from "./ProfileLogo"
import parse from 'html-react-parser';

const Replies = ({channelName, replyBody}) => {
  return (
      <div className='comment-box-container grid grid-cols-12 my-1'>
          <div className="profile-logo col-span-1 mt-2"><ProfileLogo /></div>
          <div className="comment-info col-span-10">
              <div className="channel-details">
                  <div className="channel-name font-semibold p-1">
                      {channelName}
                  </div>
                  <div className="comment-body p-1">
                      {parse(replyBody)}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Replies