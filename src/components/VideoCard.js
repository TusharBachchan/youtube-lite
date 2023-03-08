import {useState} from 'react'
const VideoCard = ({imgUrl, title, channelTitle, views}) => {
    // const [viewCount, setViewCount] = useState('')
    // const convertViewsFormat = (viewCount) => {
    //     let str = String(viewCount)
    //     if (str.length <= 3) {
    //         setViewCount(str)
    //     }
    //     else if (str.length <= 6) {
    //         let len = str.length - 3;
    //         let val = str.substring(0, len);
    //         str = val + "K";
    //         setViewCount(str)
    //     }
    //     else if (str.length <= 9) {
    //         let len = str.length - 6;
    //         let val = str.substring(0, len);
    //         str = val + "M";
    //         setViewCount(str)
    //     }
    //     else if (str.length <= 12) {
    //         let len = str.length - 9;
    //         let val = str.substring(0, len);
    //         str = val + "B";
    //         setViewCount(str)
    //     }

    // }

    return <div className="rounded-2xl">
        <img src={imgUrl} alt="" className='rounded-2xl cursor-pointer' />
        <div className='p-2'>
            <h2 className='text-lg font-semibold cursor-pointer'>{title.substring(0, 20) + "..."}</h2>
            <h3 className='text-sm cursor-pointer'>{channelTitle}</h3>
            {/* {convertViewsFormat(views)} */}
            {/* console.log(viewCount) */}
            <h3 className='text-sm'>{views + " views"}</h3>
        </div>
    </div>
}
export default VideoCard