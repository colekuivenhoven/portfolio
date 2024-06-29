import React, {useState} from "react";
import NorthIcon from '@mui/icons-material/North';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

// Import styles
import './Work.scss';

// Import Components
import InfoCard from "../InfoCard/InfoCard";

export default () => {
  const timelineData = [
    {
      title: "Software Engineer",
      date_range: {
        start: "Feb 2021",
        end: "Present"
      },
      description: `I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB. I am a software engineer with a passion for building web applications.`,
      full_description: <>
        <span>I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB. I am a software engineer with a passion for building web applications.</span>
        <h4>Responsibilities:</h4>
        <ul>
          <li>Develop new features for the company's web application</li>
          <li>Write unit tests for new features</li>
          <li>Work with the product team to define requirements for new features</li>
        </ul>
        <h4>Technologies Used:</h4>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
        <span>I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB. I am a software engineer with a passion for building web applications.</span>
        <h4>Projects:</h4>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>

        <h4>Responsibilities:</h4>
        <ul>
          <li>Develop new features for the company's web application</li>
          <li>Write unit tests for new features</li>
          <li>Work with the product team to define requirements for new features</li>
        </ul>
        <h4>Technologies Used:</h4>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
        <span>I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB. I am a software engineer with a passion for building web applications.</span>
        <h4>Projects:</h4>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </>,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s"
    },
    {
      title: "Software Engineer",
      date_range: {
        start: "June 2018",
        end: "Jan 2021"
      },
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
      full_description: <>
        <span>I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB. I am a software engineer with a passion for building web applications.</span>
        <h4>Responsibilities:</h4>
        <ul>
          <li>Develop new features for the company's web application</li>
          <li>Write unit tests for new features</li>
          <li>Work with the product team to define requirements for new features</li>
        </ul>
        <h4>Technologies Used:</h4>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
        <span>I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB. I am a software engineer with a passion for building web applications.</span>
        <h4>Projects:</h4>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </>,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s"
    },
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
      <div className="page-content work">
        <div className="timeline">
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {timelineData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent>
                  <>
                    <span className="end">{item.date_range.end}</span>
                    <NorthIcon fontSize="small" />
                    <span className="start">{item.date_range.start}</span>
                    {/* <MoreVertIcon /> */}
                  </>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  {index !== timelineData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <InfoCard 
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    full_description={item.full_description}
                  />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </>
  );
}