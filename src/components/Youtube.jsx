import React from "react";

function Youtube() {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      <h1 className="font-bold mb-6 mt-3"><span className="border-b-2 border-green-500 pb-[0.5px]">LA M</span>ISSION LOCALE EN IMAGE</h1>
      <iframe
        width="260"
        height="170"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
        className="mb-6"
      ></iframe>
    </div>
  );
}

export default Youtube;
