import React, {useState} from "react";

// Import styles
import './Projects.scss';

// Import Components
import InfoCard from "../InfoCard/InfoCard";

export default () => {

  const projectData = [

    // Project 1
    {
      title: "Software Engineer",
      date_range: {
        start: "June 2016",
        end: "Jan 2018"
      },
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
      full_description: <>
        Test
      </>,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s",
      tags: ["React", "Node", "MongoDB"]
    },

    // Project 2
    {
      title: "Software Engineer",
      date_range: {
        start: "June 2016",
        end: "Jan 2018"
      },
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
      full_description: <>
        Test
      </>,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s"
    },

    // Project 3
    {
      title: "Software Engineer",
      date_range: {
        start: "June 2016",
        end: "Jan 2018"
      },
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
      full_description: <>
        Test
      </>,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s"
    },

    // Project 4
    {
      title: "Software Engineer",
      date_range: {
        start: "June 2015",
        end: "Jan 2016"
      },
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
      full_description: <>
        Test
      </>,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s"
    },

    // Project 5
    {
      title: "Software Engineer",
      date_range: {
        start: "June 2015",
        end: "Jan 2016"
      },
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
      full_description: <>
        Test
      </>,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s"
    }
  ];
  return (
    <>
      <div className="page-content projects">
        {projectData.map((item, index) => (
          <InfoCard 
            key={'project_'+index}
            image={item.image}
            title={item.title}
            description={item.description}
            full_description={item.full_description}
            tags={item.tags}
          />
        ))}
      </div>
    </>
  );
}