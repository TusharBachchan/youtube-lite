import React from 'react'
import ProfileLogo from "./ProfileLogo"
import Replies from "./Replies"

const Comment = () => {
    let arr = ["Hi how are you ?", "Hi how are you ?", "Hi how are you ?", "Hi how are you ?"]
    let replies = 1
    let channelName = "T-Series"
  return (
      <div className='comment-box-container border border-green-200 grid grid-cols-12 my-2'>
        <div className="profile-logo col-span-1"><ProfileLogo /></div>
          <div className="comment-info border border-yellow-500 col-span-10">
            <div className="channel-details">
                <div className="channel-name font-semibold p-1">
                    T-Series
                </div>
                <div className="comment-body p-1">
                    T-Series Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta incidunt aspernatur, ex explicabo amet rerum aliquam sunt perferendis aliquid laborum aperiam 
                </div>
                  {replies > 0 ?<div className="replies p-1">
                      <button className='border p-2 rounded-3xl'> {replies === 1 ? <h2>{replies} reply</h2> : <h2>{replies} replies</h2>} </button>
                      <Replies channelName = {channelName} commentBody = {"hi how are you"}/>                     
                  </div> : null}
            </div>
        </div>
    </div>
  )
}

export default Comment