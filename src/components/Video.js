import React from 'react'

const Video = () => {
    return (
        <div className='grid grid-cols-3 border border-red-700 h-screen w-screen'>
            <div className='col-span-2 row-span-3 border flex flex-col justify-center items-center gap-2'>
                <div className='w-5/6 h-4/6 border border-red-800'>
                    <iframe className='w-full h-full' src="https://www.youtube.com/embed/zEY9n4YMiQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='w-5/6 h-1/6 border border-red-800'>

                </div>
            </div>
            <div className='row-span-4 border'>Recommendations</div>
            <div className='col-span-2 border'>Comments</div>
        </div>
    )
}

export default Video