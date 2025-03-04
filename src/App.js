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
          <p className="uppercase text-gray-700 text-left font-bold">Projects</p>
          <p className="text-sm py-2 text-gray-700 font-bold">Full Stack Development</p>
          <button
            className="w-full py-2 text-left text-gray-700 ml-4"
            onClick={() => setActiveSection("officialsports")}
          >
            OfficialSports (August 2024 - Present)
          </button>
          <p className="text-sm py-2 text-gray-700 font-bold">Machine Learning</p>
          <button
            className="w-full py-2 text-left text-gray-700 ml-4"
            onClick={() => setActiveSection("baseballstrikeprediction")}
          >
            Baseball Strike Prediction (May 2024 - August 2024)
          </button>
          <p className="text-sm py-2 text-gray-700 font-bold">Web Development</p>
          <button
            className="w-full py-2 text-left text-gray-700 ml-4"
            onClick={() => setActiveSection("portfoliowebsite")}
          >
            Portfolio Website (February 2025 - Present)
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
        {activeSection === "officialsports" && (
          <div>
            <div className="flex">
              <div className="w-1/2">
                <h2 className="text-4xl font-bold">OfficialSports</h2>
                <h3 className="text-2xl font-bold">Overview</h3>
                <p className="mt-4">OfficialSports is a cross-platform social media application designed to help users find sports venues and connect with like-minded players. Built using the MERN stack (MongoDB, Express, React, Node.js), the app provides an interactive platform where users can discover nearby courts, chat in real time, share media, and even live stream games.</p>
                <h3 className="text-2xl font-bold">My Contributions</h3>
                <ul className="list-disc mt-4">
                  <li><strong>Real-Time Messaging (WebSockets - Socket.io)</strong>
                    <ul className="list-disc list-inside">
                      <li>Implemented a real-time chat system using Socket.io, allowing users to send and receive messages instantly.</li>
                      <li>Ensured messages persist in MongoDB to maintain conversation history.</li>
                    </ul>
                  </li>
                  <li><strong>Media Upload (Google Cloud Storage)</strong>
                    <ul className="list-disc list-inside">
                      <li>Developed a feature that allows users to upload images and videos of sports venues and events.</li>
                      <li>Integrated Google Cloud Storage API for secure and scalable media storage.</li>
                    </ul>
                  </li>
                  <li><strong>User Authentication & Login System</strong>
                    <ul className="list-disc list-inside">
                      <li>Implemented secure user authentication using JWT (JSON Web Tokens) to handle login and session management.</li>
                      <li>Ensured cross-platform compatibility across web and mobile devices.</li>
                    </ul>
                  </li>
                  <li><strong>Live Streaming (AWS)</strong>
                    <ul className="list-disc list-inside">
                      <li>Integrated AWS Media Services to enable users to live stream games and events directly from their devices.</li>
                      <li>Ensured smooth streaming performance and scalability.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Tech 1" className="w-32 h-32 mb-4" />
                <img src={process.env.PUBLIC_URL + "/mongodb.png"} alt="Tech 2" className="w-32 h-32 mb-4" />
                <img src={process.env.PUBLIC_URL + "/nodejs.png"} alt="Tech 3" className="w-32 h-32 mb-4" />
              </div>
            </div>
          </div>
        )}
        {activeSection === "baseballstrikeprediction" && (
          <div>
            <div className="flex">
              <div className="w-1/2">
                <h2 className="text-4xl font-bold">Pitch Type Prediction Using Machine Learning</h2>
                <h3 className="text-2xl font-bold">Overview</h3>
                <p className="mt-4">This project explores the use of machine learning models to predict the type of pitch thrown in baseball based on pitch data. By analyzing various factors such as pitch speed, spin rate, and release angle, we aimed to determine which machine learning algorithms could most accurately classify different pitch types.</p>
                <h3 className="text-2xl font-bold">Approach & Methodology</h3>
                <ul className="list-disc mt-4">
                  <li><strong>Data Collection & Preprocessing</strong>
                    <ul className="list-disc list-inside">
                      <li>Gathered pitch data containing key metrics such as velocity, spin rate, release angle, and movement.</li>
                      <li>Cleaned and preprocessed the data using Pandas, handling missing values and standardizing features.</li>
                    </ul>
                  </li>
                  <li><strong>Model Selection & Training</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>Implemented and compared three machine learning models:
                        <ul className="list-disc list-inside pl-4">
                          <li><strong>Linear Regression</strong> (for understanding linear relationships between pitch characteristics)</li>
                          <li><strong>Support Vector Machine (SVM)</strong> (for improved classification in non-linear datasets)</li>
                          <li><strong>Random Forest</strong> (for handling feature importance and non-linear decision boundaries)</li>
                        </ul>
                      </li>
                      <li>Integrated Google Cloud Storage API for secure and scalable media storage.</li>
                    </ul>
                  </li>
                  <li><strong>Model Evaluation & Insights</strong>
                    <ul className="list-disc list-inside">
                      <li>Assessed model performance using metrics like accuracy, precision, recall, and F1-score.</li>
                      <li>Identified key features that influenced prediction accuracy the most.</li>
                      <li>Documented the results using Jupyter Notebooks for reproducibility and visualization.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <img src={process.env.PUBLIC_URL + "/pythonpic.png"} alt="Tech 1" className="w-32 h-32 mb-4" />
                <img src={process.env.PUBLIC_URL + "/scikitlearn.png"} alt="Tech 2" className="w-40 h-32 mb-4" />
              </div>
            </div>
          </div>
        )}
        {activeSection === "portfoliowebsite" && (
          <div>
            <div className="flex">
              <div className="w-1/2">
                <h2 className="text-4xl font-bold">Personal Portfolio Website</h2>
                <h3 className="text-2xl font-bold">Overview</h3>
                <p className="mt-4">This project is a personal portfolio website designed to showcase my projects, skills, and experience as a software developer. Built using React.js and Tailwind CSS, the website provides a modern, responsive, and interactive interface that highlights my work in full-stack development, machine learning, and web development.</p>
                <h3 className="text-2xl font-bold">Approach & Features</h3>
                <ul className="list-disc mt-4">
                  <li><strong>React.js for a Dynamic UI</strong>
                    <ul className="list-disc list-inside">
                      <li>Built the website using React.js to create a fast, interactive, and component-based architecture.</li>
                      <li>Implemented a single-page application (SPA) design for seamless navigation between sections.</li>
                    </ul>
                  </li>
                  <li><strong>Tailwind CSS for Modern Styling</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>Used Tailwind CSS to create a clean, responsive, and visually appealing design with minimal effort.</li>
                    </ul>
                  </li>
                  <li><strong>Sidebar Navigation & Section Toggles</strong>
                    <ul className="list-disc list-inside pl-4">
                      <li>Designed a sidebar menu for easy access to different sections:
                        <ul className="list-disc list-inside pl-4">
                          <li><strong>"About Me"</strong> – A brief introduction and background.</li>
                          <li><strong>"Projects"</strong> – A showcase of my technical work, categorized by Full Stack Development, Machine Learning, and Web Development.</li>
                          <li><strong>"Resume"</strong> – An embedded PDF of my latest resume.</li>
                          <li><strong>"Contact"</strong> – Links to my email, LinkedIn, and GitHub.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><strong>Interactive Animations & Transitions</strong>
                    <ul className="list-disc list-inside">
                      <li>Added smooth animations for UI elements to enhance user experience.</li>
                      <li>Used state management to toggle content dynamically without reloading the page.</li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-4">
                  <a
                    href="https://github.com/jerolync/my-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Portfolio Repository
                  </a>
                </div>
              </div>
              <div className="w-1/2">
                <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Tech 1" className="w-32 h-32 mb-4" />
                <img src={process.env.PUBLIC_URL + "/tailwindcss.svg"} alt="Tech 2" className="w-40 h-32 mb-4" />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default App;