import React from "react";
import NorthIcon from '@mui/icons-material/North';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

// Import styles
import './Work.scss';

// Import Components
import InfoCard from "../InfoCard/InfoCard";

interface Job {
  id: string,
  title: string;
  date_range: {
    start: string;
    end: string;
  };
  description: string;
  full_description: React.ReactNode;
  image: string;
  tags?: string[];
  responsibilities?: string[];
  projects?: string[];
}

export default () => {
  let jobs: Job[] = [
    {
      id: 'quivers',
      title: "Quivers - Lead Frontend Engineer",
      description: `At Quivers, I lead lead the frontend team in building multiple B2B applications while managing an international team of other frontend engineers.`,
      full_description: <></>,
      date_range: {start: "Feb 2021", end: "Present"},
      tags: ["React", "Angular", "OpenAI API", "Google Maps API", "SASS", "Bitbucket", "Jira", "Celeritas"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKAQvgIloqx174Uetb-qiazVP2K2q9Gsgtg&s",
      responsibilities: [
        "Lead the frontend team in building multiple B2B applications",
        "Manage an international team of other frontend engineers",
        "Work with the product team to define requirements for new features"
      ],
      projects: [
        "Project 1",
        "Project 2",
        "Project 3"
      ]
    },
    {
      id: 'homer-ford',
      title: "Homer Ford - Lead Full-Stack Engineer",
      description: "At Homer Ford, I lead the engineering team in building the company's site and reservation application on both the frontend and backend.",
      full_description: <></>,
      date_range: {start: "Aug 2021", end: "Jan 2022"},
      tags: ["React", "Express", "MySQL", "MongoDB", "AWS EC2", "AWS Lightsail", "AWS ANS", "NGINX", "Jira"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2x-_hsaXSu9P9jUmiVzPoM_lKRVyYtZ6DsA&s"
    },
    {
      id: 'parkhill',
      title: "Parkhill - Developer and Network Admin",
      description: "I am a software engineer with a passion for building web applications. I have experience with React, Node.js, and MongoDB.",
      full_description: <></>,
      date_range: {start: "Jun 2017", end: "Mar 2021"},
      tags: ["Javascript", "HTML5", "CSS3"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw5bYlx0tpFPvy1zz5mlwHgq-li8OCVMtLQ&s"
    },
    {
      id: 'cyltex',
      title: "CYLTEX - Lead Full-Stack Engineer",
      description: "At CYLTEX, which was bought out by Absolute Accuracy, I lead the engineering team in building the company's site and reservation application on both the frontend and backend.",
      full_description: <></>,
      date_range: {start: "Aug 2020", end: "Dec 2020"},
      tags: ["Django", "MSSQL", "Python", "Javascript", "AJAX", "MS Server", "HTML5", "CSS3"],
      image: "https://absolute-accuracy.com/static/assets/img/aa-sm.png"
    },
    {
      id: 'texas-tech',
      title: "Texas Tech University - Web Development Intern",
      description: "At Texas Tech University, I maintained and developed web applications for the department of Human Sciences.",
      full_description: <></>,
      date_range: {start: "Aug 2015", end: "Mar 2016"},
      tags: ["PHP", "Javascript", "HTML", "CSS"],
      image: "https://images.thdstatic.com/productImages/8d8da122-d552-4621-af26-121ae7153005/svn/fanmats-other-exterior-auto-accessories-22256-64_300.jpg"
    }
  ]

  // Full description content
  jobs.forEach((job) => {
    job.full_description = <>

      {/* Tags */}
      {job.tags && (
        <div className="tags">
          {job.tags.map((tag, index) => (
            <span className="tag" key={"tags_"+index}>{tag}</span>
          ))}
        </div>
      )}

      {/* Description */}
      {job.description && <span>{job.description}</span>}

      {/* Responsibilities */}
      {job.responsibilities && (
        <>
          <h4>Responsibilities:</h4>
          <ul>
            {job.responsibilities.map((responsibility, index) => (
              <li key={"responsibility_"+index}>{responsibility}</li>
            ))}
          </ul>
        </>
      )}

      {/* Projects */}
      {job.projects && (
        <>
          <h4>Projects:</h4>
          <ul>
            {job.projects.map((project, index) => (
              <li key={"project_"+index}>{project}</li>
            ))}
          </ul>
        </>
      )}
    </>
  });

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
            {jobs.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent>
                  <>
                    <span className="end">{item.date_range.end}</span>
                    <NorthIcon fontSize="small" />
                    <span className="start">{item.date_range.start}</span>
                  </>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  {index !== jobs.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <InfoCard 
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    full_description={item.full_description}
                    tags={item.tags}
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