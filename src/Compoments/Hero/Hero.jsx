import React from "react";
import { motion } from "framer-motion";

// Staggered words animation
const wordAnimation = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function Hero() {
  const titleWords = ["Fuel", "Your", "Body", "with", "Premium", "Supplements"];

  return (
    <div className="relative w-full min-h-[550px] md:h-[650px] bg-gray-50 overflow-hidden rounded-b-[60px] md:rounded-b-[120px] shadow-xl mt-[1%]">
      {/* Parallax Background */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col md:flex-row"
      >
        <div className="w-full md:w-1/2 bg-white"></div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 bg-orange-500 clip-diagonal md:rounded-bl-[120px]"
        ></motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 sm:px-10 md:px-20 py-10 md:py-0">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordAnimation}
                className={`inline-block mr-2 ${
                  word === "Premium"
                    ? "bg-orange-500 text-white px-2 rounded"
                    : word === "Supplements"
                    ? "text-orange-500"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            Discover clean, science-backed supplements in bold orange & white —
            trusted by health enthusiasts worldwide.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold text-lg rounded-full shadow-lg relative overflow-hidden"
            >
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#fb923c", color: "#fb923c" }}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-full transition"
            >
              Learn More
            </motion.button>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative bg-white shadow-2xl border-4 border-orange-200 rounded-full p-6 flex items-center justify-center w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px]"
          >
            {/* Glow Border */}
            <motion.div
              animate={{ boxShadow: ["0 0 0px #fb923c", "0 0 40px #fb923c", "0 0 0px #fb923c"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
            />

            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?fm=jpg&q=60&w=3000"
              alt="Orange White Supplement Capsules"
              className="relative w-full h-full object-contain drop-shadow-2xl rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-300 rounded-full opacity-40"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * 600 }}
            animate={{ y: [null, -100], opacity: [0.3, 0] }}
            transition={{ duration: 6 + Math.random() * 3, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
