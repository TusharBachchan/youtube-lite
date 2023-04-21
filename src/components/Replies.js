import React from 'react'
import ProfileLogo from "./ProfileLogo"

const Replies = ({channelName, commentBody}) => {
  return (
      <div className='comment-box-container border border-green-200 grid grid-cols-12 my-1'>
          <div className="profile-logo col-span-1"><ProfileLogo /></div>
          <div className="comment-info border border-yellow-500 col-span-10">
              <div className="channel-details">
                  <div className="channel-name font-semibold p-1">
                      {channelName}
                  </div>
                  <div className="comment-body p-1">
                    {commentBody}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Replies