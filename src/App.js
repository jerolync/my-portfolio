import React, { useState } from 'react';
import { motion } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState("info");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6 flex flex-col justify-between">
        <div>
          <button
            className={`w-full py-2 text-left font-bold text-xl ${
              activeSection === "info" ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => setActiveSection("info")}
          >
            JC
          </button>
          <hr className="my-2" />
          <button
            className={`w-full py-2 text-left font-bold text-lg ${
              activeSection === "resume" ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => setActiveSection("resume")}
          >
            Resume
          </button>
          <hr className="my-4 border-gray-300" />
          <p className="uppercase text-left font-bold">Projects</p>
          <p className="text-sm py-2 text-gray-700 font-bold">Full Stack Development</p>
          <button
            className="w-full py-2 text-left text-gray-700 ml-4"
            onClick={() => setActiveSection("officialsports")}
          >
            OfficialSports
          </button>
          <p className="text-sm py-2 text-gray-700 font-bold">Machine Learning</p>
          <button
            className="w-full py-2 text-left text-gray-700 ml-4"
            onClick={() => setActiveSection("baseballstrikeprediction")}
          >
            Baseball Strike Prediction
          </button>
          <p className="text-sm py-2 text-gray-700 font-bold">Video Games</p>
          <button
            className="w-full py-2 text-left text-gray-700 ml-4"
            onClick={() => setActiveSection("dungeoncrawler")}
          >
            Dungeon Crawler
          </button>
        </div>
        <div>
          <p className="text-gray-500 uppercase text-sm font-bold">Contact</p>
          <button
            className="w-full py-2 text-left text-gray-700"
            onClick={() => window.location.href = 'mailto:jerolynsimonc@gmail.com'}
          >
            Email
          </button>
          <button
            className="w-full py-2 text-left text-gray-700"
            onClick={() => window.open('https://www.linkedin.com/in/jerolyns', '_blank')}
          >
            LinkedIn
          </button>
          <button
            className="w-full py-2 text-left text-gray-700"
            onClick={() => window.open('https://github.com/jerolync', '_blank')}
          >
            GitHub
          </button>
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        className="flex-1 p-10"
      >
        {activeSection === "info" && (
          <div className="flex flex-col items-center text-center">
            <div className="flex w-full justify-between items-center mb-20">
              <div className="flex flex-col items-end mr-4">
                <h1 className="text-8xl font-bold">Jerolyn</h1>
                <h1 className="text-8xl font-bold">Clement</h1>
              </div>
              <img src={process.env.PUBLIC_URL + '/profile_pic.jpg'} alt="Profile" className="w-48 h-64 rounded-full" />
            </div>
            <div className="text-lg max-w-2xl">
              <p>I am a third-year Computer Science student at Georgia Tech, actively seeking job opportunities in software development and full-stack development. I am eager to work on real-world applications and learn from industry experts to further hone my skills. My technical experience includes proficiency in React, Node.js, Java, Python, and machine learning algorithms, along with a solid understanding of data structures and other core computer science concepts.</p>
              <p>Outside of coding, I enjoy playing video games, watching movies, and staying active by playing basketball. I’m passionate about combining my academic knowledge with hands-on experience, and I’m excited to contribute to innovative projects that make a meaningful impact.</p>
            </div>
          </div>
        )}
        {activeSection === "resume" && (
          <iframe
            src={process.env.PUBLIC_URL + '/resume.pdf'}
            className="w-full h-full border"
            title="Resume"
          ></iframe>
        )}
        {activeSection === "fullstack" && (
          <div>
            <p>Full Stack Development Projects:</p>
          </div>
        )}
        {activeSection === "officialsports" && (
          <div>
            <p>OfficialSports Project Details...</p>
          </div>
        )}
        {activeSection === "machinelearning" && (
          <div>
            <p>Machine Learning Projects:</p>
          </div>
        )}
        {activeSection === "baseballstrikeprediction" && (
          <div>
            <p>Baseball Strike Prediction Project Details...</p>
          </div>
        )}
        {activeSection === "videogames" && (
          <div>
            <p>Video Game Projects:</p>
          </div>
        )}
        {activeSection === "dungeoncrawler" && (
          <div>
            <p>Dungeon Crawler Project Details...</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default App;