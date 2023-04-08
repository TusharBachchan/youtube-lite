import React, {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import { API_KEY } from '../utils/constants'
const Video = () => {
    // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v")
useEffect(() => {
    getVideoDetails()
    getVideoComments()
}, [])
const [videoData, setVideoData] = useState({})
const [CommentData, setCommentData] = useState([])
const getVideoDetails = async() => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`)
    const json = await data.json();
    setVideoData(json.items[0])
}
const getVideoComments = async() => {
    // const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`)
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${API_KEY}`)
    const json = await data.json();
    setCommentData(json.items)

    // setVideoData(json.items[0])
}
    return (
        <div className='video-container grid grid-cols-3 border  h-screen w-screen mt-32'>
            <div className='col-span-2 row-span-3'>
                {/* {flex flex-col justify-center items-center gap-2} */}
                <div className='h-4/5 w-full'>
                    <iframe className="h-full w-5/6 mx-auto" src={"https://www.youtube.com/embed/" + id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-semibold w-5/6 mx-auto py-3'>{videoData?.snippet?.title}</h1>
                </div>
            </div>
            <div className='row-span-4 border'>Recommendations</div>
            <div className='col-span-2 border'>Comments</div>
        </div>
    )
}

export default Video