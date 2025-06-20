import React from "react";
import curvetopia from "../assets/Frame 1.png";
import Paycart from "../assets/Frame 3.png";
import PredictHer from "../assets/Frame 2.png";
import Portfolioprj from "../assets/Frame 4.png";
import Autism from "../assets/Frame 5.png";
import Todo from "../assets/Frame 6.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "CURVETOPIA | EXPLORING CURVES VIA ML AND CV",
      description:
        "Image processing, symmetry detection, and completion using deep learning.",
      src: curvetopia,
      tech: ["TensorFlow", "Keras", "OpenCV", "Python", "Deep Learning"],
    },
    {
      id: 2,
      title: "PORTFOLIO | FULL STACK DEVELOPER PORTFOLIO",
      description:
        "Personal developer portfolio built with modern UI and responsive design, highlighting skills, projects, and contact options.",
      src: Portfolioprj,
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "PREDICTHER | AI-BASED FEMALE DISEASE PREDICTOR",
      description:
        "A disease predictor platform for women’s health using machine learning, user-friendly interface, and responsive design.",
      src: PredictHer,
      tech: ["Flask", "Figma", "Bootstrap", "HTML", "CSS", "JavaScript", "ML"],
    },
    {
      id: 4,
      title: "AUTISMALERT | AUTISM DETECTION MOBILE APP",
      description:
        "Mobile app offering a 40-question assessment with secure login, real-time data sync, and Firebase integration.",
      src: Autism,
      tech: ["React Native", "Firebase", "Firestore", "Google Auth", "Mobile UI"],
    },
    {
      id: 5,
      title: "PAYCART | E-COMMERCE WEB APP WITH RAZORPAY",
      description:
        "Secure e-commerce application with checkout flow, integrated Razorpay payments, and user authentication.",
      src: Paycart,
      tech: ["React", "Redux", "Firebase", "Tailwind CSS", "Razorpay"],
    },
    {
      id: 6,
      title: "TODO LIST | TASK MANAGEMENT APP",
      description:
        "A clean and lightweight task manager app using public APIs with dynamic task tracking and filtering.",
      src: Todo,
      tech: ["React.js", "CSS", "JavaScript", "REST API", "UX Design"],
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-[#25013b] w-full text-white py-16 px-4"
    >
      <div className="max-w-screen-lg mx-auto">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-purple-700">
            My Projects
          </p>
          <p className="py-6 text-lg text-gray-300">Check out some of my work right here</p>
        </div>

        <div className="space-y-12">
          {portfolios.map(({ id, src, title, description, tech }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row bg-[#1c0f2c] rounded-lg overflow-hidden shadow-lg"
            >
              {/* Left: Image */}
              <div className="md:w-1/3 w-full">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Right: Text */}
              <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                  <p className="text-gray-300 mb-4">{description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.map((item, index) => (
                    <span
                      key={index}
                      className="bg-purple-800 text-sm px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
