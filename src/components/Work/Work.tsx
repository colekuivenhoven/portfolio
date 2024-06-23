import React, {useState} from "react";
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
      date_range: "February 2021 - Present",
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s"
    },
    {
      title: "Software Engineer",
      date_range: "June 2018 - January 2021",
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s"
    },
    {
      title: "Software Engineer",
      date_range: "June 2016 - January 2018",
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s"
    },
    {
      title: "Software Engineer",
      date_range: "June 2015 - January 2016",
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s"
    },
    {
      title: "Software Engineer",
      date_range: "June 2015 - January 2016",
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
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
                  {item.date_range}
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