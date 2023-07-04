import React from 'react';

const ResponsiveYouTubeVideo = ({ videoUrl }) => {
    const id = videoUrl.split("?v=")[1];
    return (
        <div className="flex justify-center items-center">
            <div className="aspect-w-16 aspect-h-9 sm:w-auto sm:h-auto md:h-[390px] md:w-[695px] lg:h-[460px] lg:w-[860px]">
                <iframe
                    className="w-full h-full"
                    src={"https://www.youtube.com/embed/" + id}
                    title="YouTube Video"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default ResponsiveYouTubeVideo;
