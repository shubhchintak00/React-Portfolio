import React from 'react'
import ParticlesBackground from "./ParticlesBackground";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-gradient-to-b from-[#25013b] to-black text-white">
      <ParticlesBackground />
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-purple-700">About</p>
            </div>

            <p className="text-xl mt-10">
            I'm Shalini Chongdar, a passionate full-stack developer and UI/UX designer with a deep 
            interest in crafting meaningful and intuitive digital experiences. My work lies at the
            intersection of creativity and functionality—I love turning complex ideas into clean, 
            responsive, and impactful web and mobile applications. With a strong foundation in technologies 
            like React, React Native, Firebase, Tailwind CSS, and backend API integration, I’ve delivered 
            a range of real-world projects that solve practical problems in domains such as healthcare,
            e-commerce, AI, and education.
            Over the past year, I’ve interned at companies like MrMed, Outrix, and Asteride, where I 
            contributed to both front-end and full-stack development. From designing pixel-perfect interfaces 
            to optimizing performance and improving user retention, I’ve played an active role in bringing
             live products to users. These experiences have helped me develop not just strong technical skills 
             but also collaborative agility—working across teams, handling feedback loops, and building under 
             real-world constraints.
            </p>

          
            <p className="text-xl mt-4">
                In addition to my technical journey, I’m the co-founder of Chaskaa, a custom merchandise brand 
                that brings art and identity together through thoughtful design. I'm currently pursuing my B.Tech 
                in Electronics and Communication at IIIT Allahabad, where I actively participate in tech, design,
                 and entrepreneurial communities like Google Developer Student Club (GDSC) and NewGen IEDC. Whether
                  I’m diving into code, sketching UI flows, or leading a startup initiative, I’m always driven by 
                  a desire to build products that are useful, beautiful, and accessible.
            </p>
        </div>

    </div>
  )
}

export default About