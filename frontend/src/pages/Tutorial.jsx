import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer/Footer";

const tutorials = [
  { title: "Tutorial 1", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Tutorial 2", url: "https://video-previews.elements.envatousercontent.com/f20394f1-7db4-4f34-9f56-39abbc410e75/watermarked_preview/watermarked_preview.mp4" },
  { title: "Tutorial 3", url: "https://www.shutterstock.com/shutterstock/videos/3748600801/preview/stock-footage-lofi-girl-studying-at-her-desk-rain-ourside-beautiful-chill-atmospheric-wallpaper-design-anime.webm" },
  { title: "Tutorial 4", url: "https://www.shutterstock.com/shutterstock/videos/3432978267/preview/stock-footage-nighttime-reflections-lo-fi-girl-alone-on-balcony-watching-stormy-rain-loop-animation.webm" },
];

const Tutorial = () => {
  const [currentVideo, setCurrentVideo] = useState(tutorials[0]);

  return (
    <>
      <motion.div
        className="bg-[#0f1125] min-h-screen pt-24 pb-24 text-white font-['Prompt']"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold">Tutorial</h1>
          <p className="text-sm text-gray-400">
            You can follow up the video for purchasing or usage
          </p>
          <div className="w-28 h-1 bg-blue-400 mt-2 mx-auto rounded-full" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-[#191b31] px-3 py-2 rounded-xl shadow-inner flex gap-1">
            {tutorials.map((t, i) => {
              const isActive = currentVideo.title === t.title;
              return (
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.06, boxShadow: '0 2px 16px 0 rgba(59,130,246,0.15)' }}
                  key={i}
                  onClick={() => setCurrentVideo(t)}
                  className={`px-5 py-2 text-sm font-medium rounded-md transition-all duration-200
                    ${isActive
                      ? "bg-blue-500 text-white shadow-sm"
                      : "text-gray-300 hover:bg-[#2d3355] hover:text-white"
                    }`}
                  aria-selected={isActive}
                  role="tab"
                  tabIndex={0}
                  style={{ outline: isActive ? '2px solid #3b82f6' : 'none', outlineOffset: '2px' }}
                >
                  {t.title}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Video Player */}
        <motion.div
          className="flex justify-center mt-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gray-800 w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              {currentVideo.url ? (
                <motion.video
                  key={currentVideo.url}
                  className="w-full"
                  controls
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
                >
                  <source src={currentVideo.url} type={currentVideo.url.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
                  Your browser does not support the video tag.
                </motion.video>
              ) : (
                <motion.div
                  key="no-video"
                  className="flex flex-col items-center justify-center h-64 text-gray-300 text-center"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="w-12 h-12 mb-4 text-white animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                  <p className="text-lg font-semibold">Video is not ready now</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Tutorial;
