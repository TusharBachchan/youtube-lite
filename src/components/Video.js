import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../utils/constants'
import { TbShare3 } from 'react-icons/tb';
const Video = () => {
    // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v")
    useEffect(() => {
        getVideoDetails()
        getVideoComments()
        // getchannelDetails()
    }, [])
    const [videoData, setVideoData] = useState({})
    const [CommentData, setCommentData] = useState([])
    const getVideoDetails = async () => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`)
        const json = await data.json();
        setVideoData(json.items[0])
    }
    const getVideoComments = async () => {
        // const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`)
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${API_KEY}`)
        const json = await data.json();
        setCommentData(json.items)

        // setVideoData(json.items[0])
    }
    // setting up channel api function

    // const getchannelDetails = async() => {
    //     const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails&channelId=${videoData?.snippet?.channelId}&key=${API_KEY}
    // `)

    //     // const json = await data.json();
    //     // setCommentData(json.items)

    //     // setVideoData(json.items[0])
    // }

    return (
        <div className="video-page-container mt-32 grid grid-cols-3  border-4 border-red-800 w-screen">
            <div className="leftSection border-2 border-green-500 col-span-2">
                {/* Video iframe */}
                <div className="video-container">
                    <iframe className="h-96 w-4/5 mx-auto" src={"https://www.youtube.com/embed/" + id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                {/* Video title */}
                <div className="video-title">
                    <h1 className='text-2xl font-medium w-4/5 mx-auto my-3'>{videoData?.snippet?.title}</h1>
                </div>
                {/* Channel Details 
                    -contains Channel detais
                    -subscribe, like, dislike, share and options button 
                */}

                <div className="channel-details my-2 w-4/5 mx-auto flex border">
                    <div className="channel-details-subscribe">Lorem ipsum dolor.</div>
                    <div className="channel-details-buttons p-2 border flex gap-2">
                        <div className='like-dislike-btn bg-gray-200 rounded-lg'>
                            <button className="p-2 bg-gray-200 rounded-lg">👍</button>
                            <span className="seperator bg-gray-200 text-gray-400 py-2">|</span>
                            <button className="p-2 bg-gray-200 rounded-lg">👎</button>
                        </div>
                        <div className="buttons flex">
                            <div className="share flex bg-gray-200 rounded-3xl">
                                <div className="py-3 pl-3"><TbShare3 /></div>
                                <button className="p-2 border bg-gray-200 rounded-3xl pr-3">Share</button>
                            </div>
                            <button className="p-2 border mx-2 bg-gray-200 rounded-lg">...</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightSection border-2 border-blue-800">{videoData?.snippet?.channelId}</div>
        </div>
    )
}

export default Video