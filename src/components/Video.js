import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../utils/constants'
import { TbShare3 } from 'react-icons/tb';
import { SlOptions } from 'react-icons/sl';
import ProfileLogo from "./ProfileLogo"
import Comment from "./Comment"
import RecommendedVideos from './RecommendedVideos';

const Video = () => {
    // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v")
    const [recommendedVideos, setRecommendedVideos] = useState([]);

    useEffect(() => {
        getVideoDetails()
        getVideoComments()
        getRecommendedVideos()
        // getchannelDetails()
        console.log(recommendedVideos)
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
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${API_KEY}&maxResults=100`)
        const json = await data.json();
        setCommentData(json.items)

        // setVideoData(json.items[0])
    }
    const getRecommendedVideos = async () => {
        // const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`)
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=${API_KEY}&maxResults=50
`)
        const json = await data.json();
        setRecommendedVideos(json)

        // setVideoData(json.items[0])
    }

    // const getRecommendedVideos = async () => {
    //     try {
    //         const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=${API_KEY}&maxResults=50`);

    //         if (!data.ok) {
    //             throw new Error('Failed to fetch recommended videos bhai');
    //         }

    //         const json = await data.json();

    //         // Check if the expected data is available
    //         if (json.items && json.items.length > 0) {
    //             setRecommendedVideos(json.items);
    //         } else {
    //             console.error('No recommended videos found.');
    //         }
    //     } catch (error) {
    //         console.error('Error fetching recommended videos:', error);
    //     }
    // };






    // setting up channel api function

    //     const getchannelDetails = async () => {
    //         const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData?.snippet?.channelId}&key=${API_KEY}
    // `)

    //         // const json = await data.json();
    //         // setCommentData(json.items)

    //         // setVideoData(json.items[0])
    //     }

    return (
        <div className="video-page-container p-2 mobile:mt-48 sm:mt-28 md:mt-36 grid  grid-cols-1 md:grid-cols-3">
            <div className="leftSection mobile:col-span-1 md:col-span-2">
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
                    -subscribe, like, dislike, share and options button starts here
                */}

                <div className="channel-details my-2 w-4/5 mx-auto flex justify-between ">
                    <div className="channel-details-subscribe flex">
                        <div className="p-2"><ProfileLogo /></div>
                        <div>
                            <h1 className=" font-bold">{videoData?.snippet?.channelTitle}</h1>
                            <h3 className=" text-sm text-gray-500">Subscriber Count</h3>
                        </div>
                    </div>
                    <div className="channel-details-buttons flex gap-6">
                        <div className='like-dislike-btn bg-gray-200 rounded-2xl px-3 '>
                            <button className="p-2 bg-gray-200 rounded-lg">👍</button>
                            <span className="seperator bg-gray-200 text-gray-400 py-2">|</span>
                            <button className="p-2 bg-gray-200 rounded-lg">👎</button>
                        </div>

                        {/* ==================================Share Button started===========================*/}
                        <div className="share-btn buttons flex">
                            <div className="flex bg-gray-200 rounded-3xl">
                                <div className="py-2 pl-3 text-2xl"><TbShare3 /></div>
                                <button className="p-2 border bg-gray-200 rounded-3xl pr-3">Share</button>
                            </div>
                            {/* ==================================Share Button ended===========================*/}
                            <button className="p-3 border mx-2 bg-gray-200 rounded-full text-gray-900 "><SlOptions /></button>
                        </div>
                    </div>
                </div>


                {/* Channel Details 
                    -contains Channel detais
                    -subscribe, like, dislike, share and options button ends here
                */}
                {/* Description section starting here */}
                <div className='description bg-gray-200 my-2 w-4/5 mx-auto p-3 rounded-xl'>
                    {videoData?.snippet?.description}
                </div>
                {/* Description section ending here */}
                {/* Comments section starting here */}
                <div className='comments-container w-4/5 mx-auto p-3 rounded-xl'>
                    <h1 className='font-semibold text-lg'>Comments</h1>
                    <div className="comment-container ">
                        {CommentData.map((item) => {
                            return <Comment commentBody={item?.snippet?.topLevelComment?.snippet?.textDisplay} channelName={item?.snippet?.topLevelComment?.snippet?.authorDisplayName} replyCount={item.hasOwnProperty("replies") ? item.replies.comments.length : 0} replies={item.hasOwnProperty("replies") ? item.replies.comments : []} />
                        })}
                    </div>
                </div>
                {/* Comments section ending here */}
            </div>
            <div className="rightSection">
                {/* <RecommendedVideos imgUrl={recommendedVideos.items}/> */}
                {recommendedVideos?.items?.map((item) => <RecommendedVideos imgUrl={item?.snippet?.thumbnails?.medium?.url} title={item?.snippet?.title} channelTitle={item?.snippet?.channelTitle} views={item?.statistics?.viewCount} id={item?.id} />)}
            </div>
        </div>

    )
}

export default Video

// 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData?.snippet?.channelId}&key=${API_KEY}


