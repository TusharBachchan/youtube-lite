import React from 'react'
import ProfileLogo from "./ProfileLogo"
import Replies from "./Replies"
import parse from 'html-react-parser';

const Comment = ({ commentBody, channelName, replyCount, replies }) => {
  let arr = ["Hi how are you ?", "Hi how are you ?", "Hi how are you ?", "Hi how are you ?"]
  // let replyCount = 1
  // let channelName = "T-Series"
  return (
    <div className='comment-box-container grid grid-cols-12 my-2'>
      <div className="profile-logo col-span-1 mt-2"><ProfileLogo /></div>
      <div className="comment-info col-span-10">
        <div className="channel-details">
          <div className="channel-name font-semibold p-1">
            {channelName}
          </div>
          <div className="comment-body p-1">
            {parse(commentBody)}
          </div>
          {replyCount > 0 ? <div className="replyCount p-1">
            <button className='border p-2 rounded-3xl text-blue-600 font-semibold hover:bg-blue-200'> {replyCount === 1 ? <h2>{replyCount} reply</h2> : <h2>{replyCount} replies</h2>} </button>
            {replies.map((item) => <Replies channelName={item.snippet.authorDisplayName} replyBody={item.snippet.textDisplay} />)}
            {/* <Replies channelName={item.snippet.authorDisplayName}/> */}
          </div> : null}
        </div>
      </div>
    </div>
  )
}

export default Comment