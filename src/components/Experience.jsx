import React from 'react';

const Experience = () => {
    const experiences = [
        {
          role: "React Native & JS Developer Intern",
          company: "Asteride",
          duration: "Dec 2024 – May 2025",
          location: "Remote",
          bullets: [
            "Developed 3+ mobile apps using React Native and JavaScript, resulting in a 20% increase in user engagement.",
            "Enhanced UI components, improving app load time by 15% and optimizing cross-platform performance.",
          ],
          tags: ["React Native", "JavaScript", "Redux", "Expo", "REST API", "Firebase", "Git"],
        },
        {
          role: "Front-End Developer & UI/UX Designer",
          company: "MrMed.in",
          duration: "Oct 2024 – Dec 2024",
          location: "Remote",
          bullets: [
            "Designed responsive UI for healthcare e-commerce platform, increasing user retention by 25%.",
            "Collaborated with design and engineering teams to build scalable React components, reducing development time by 30%.",
          ],
          tags: ["React", "JavaScript", "Figma", "Tailwind CSS", "Redux Toolkit", "Next.js", "Git"],
        },
        {
          role: "Application Designer",
          company: "Gleo.ai",
          duration: "July 2024",
          location: "Remote",
          bullets: [
            "Designed conversation skill mastery app with simulation and roleplay features, achieving 1,000+ active users in 2 months.",
            "Contributed to a Microsoft for Startups-supported project, ensuring UI/UX met enterprise standards.",
          ],
          tags: ["Figma", "Adobe XD", "Framer", "UI Design", "User Flows", "Prototyping", "Component Libraries"],
        },
        {
          role: "Web Development Intern",
          company: "Outrix",
          duration: "Jun 2025 – Aug 2025",
          location: "Remote",
          bullets: [
            "Developed responsive front-end designs and integrated backend APIs, reducing bug reports by 40%.",
          ],
          tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Axios", "Node.js", "REST API"],
        },
      ];
      
  return (
    <div name="Experience" className="bg-gradient-to-b from-[#25013b] to-black w-full text-white md:h-screen p-4">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold border-b-4 border-purple-700 mb-8">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10">
            <p className="text-gray-400 text-sm">{exp.duration} | {exp.location}</p>
            <h3 className="text-xl font-semibold">{exp.company.toUpperCase()} <span className="font-normal">| {exp.role}</span></h3>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-300">
              {exp.bullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap mt-3 gap-2">
              {exp.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-700 text-sm px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
