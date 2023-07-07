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
// // import { useState } from 'react'
// import Video from './Video'
// const RecommendedVideos = ({ imgUrl, title, channelTitle, views, id }) => {
//     // const [viewCount, setViewCount] = useState('')
//     // const convertViewsFormat = (viewCount) => {
//     //     let str = String(viewCount)
//     //     if (str.length <= 3) {
//     //         setViewCount(str)
//     //     }
//     //     else if (str.length <= 6) {
//     //         let len = str.length - 3;
//     //         let val = str.substring(0, len);
//     //         str = val + "K";
//     //         setViewCount(str)
//     //     }
//     //     else if (str.length <= 9) {
//     //         let len = str.length - 6;
//     //         let val = str.substring(0, len);
//     //         str = val + "M";
//     //         setViewCount(str)
//     //     }
//     //     else if (str.length <= 12) {
//     //         let len = str.length - 9;
//     //         let val = str.substring(0, len);
//     //         str = val + "B";
//     //         setViewCount(str)
//     //     }

//     // }

//     return <div className="rounded-2xl">
//         <Link to={`/watch?v=${id}`}><img src={imgUrl} alt="" className='rounded-2xl cursor-pointer' /></Link>
//         <div className='p-2'>
//             <Link to={`/watch?v=${id}`}><h2 className='text-lg font-semibold cursor-pointer'>{title.substring(0, 20) + "..."}</h2></Link>
//             <h3 className='text-sm cursor-pointer'>{channelTitle}</h3>
//             {/* {convertViewsFormat(views)} */}
//             {/* console.log(viewCount) */}
//             <h3 className='text-sm'>{views + " views"}</h3>
//         </div>
//     </div>
// }
// export default RecommendedVid