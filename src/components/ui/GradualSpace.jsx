'use client';

import React from 'react';

function GradualSpace({
  videoUrl = "/vedio.gif"
}) {
  return (
    <section
      id="features"
      
    >
      {/* Background Video with reduced width */}
      <div className="mx-auto w-2/4 h-[50vh] overflow-hidden relative">
        <image
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <img src={videoUrl} />
        </image>
        {/* Light overlay */}
        <div className="absolute inset-0 bg-black-600"></div>
      </div>
    </section>
  );
}

export default GradualSpace;