// import React, { useEffect, useRef } from 'react';
// import communeoVideo from "../../assets/sanuri/communeo.mp4";


// const AutoPauseVideo = () => {
//   const videoRef = useRef(null);
//   const videoContainerRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: '0px',
      
//     };

//     const handleIntersect = (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // Check if video is loaded before playing
//           if (videoRef.current?.readyState >= 2) {
//             videoRef.current.play().catch(error => {
//               console.log("Error playing video:", error);
//             });
//           }
//         } else {
//           videoRef.current?.pause();
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersect, options);

//     if (videoContainerRef.current) {
//       observer.observe(videoContainerRef.current);
//     }

//     // Add event listener for video loaded
//     const handleLoadedData = () => {
//       if (videoRef.current && videoRef.current.offsetParent !== null) {
//         videoRef.current.play().catch(error => {
//           console.log("Error playing video:", error);
//         });
//       }
//     };

//     videoRef.current?.addEventListener('loadeddata', handleLoadedData);

//     return () => {
//       observer.disconnect();
//       videoRef.current?.removeEventListener('loadeddata', handleLoadedData);
//     };
//   }, []);

//   return (
//     <div ref={videoContainerRef} className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
//       <div className="aspect-video relative">
//         <video 
//           ref={videoRef}
//           className="w-full h-full object-cover rounded-2xl"
//           controls
//           playsInline // Add this for better mobile support
//           loop
//           // Keep muted for better autoplay support
//         >
//           <source src={communeoVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black-600 via-transparent to-transparent pointer-events-none" />
//     </div>
//   );
// };

// export default AutoPauseVideo;