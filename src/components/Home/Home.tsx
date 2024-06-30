import React, {useState} from "react";
import Box from '@mui/material/Box';

// Import Components
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

// Import styles
import './Home.scss';

export default () => {
  const [contactInfoOpen, setContactInfoOpen] = useState(false);

  return (
    <>
      <div className="page-content home">
        <div className="text-container">

          <Box className="opening-container g-3">
            <Box className="image-container">
              <img src="./profile_pic_2.png" alt="Cole Kuivenhoven" />
            </Box>
            <Box className="description-container">
              <div className="title">Cole Kuivenhoven</div>
              <div className="subtext">A Full-Stack Developer</div>
              <div className="subtext">
                <Button 
                  label="See My Projects" 
                  onClick={() => window.location.href = "/projects"} 
                  variant="text" 
                  size="medium" 
                  type="secondary"
                />
                <Button 
                  label="Contact Me" 
                  onClick={() => setContactInfoOpen(true)}
                  variant="text" 
                  size="medium" 
                  type="secondary"
                />
              </div>
            </Box>
          </Box>

          <Box className="flex-col rg-1">
            <h3>About Me</h3>
            <span>
              I've worked as a lead developer on full-stack applications in multiple capacities, as well as followed 
              agile project management methodologies while building these applications.
            </span>
          </Box>

          <Box className="flex-col g-3 w-100">
            <Box className="flex-col w-100">
              <table>
                <thead>
                  <th>Front-end</th>
                  <th>Back-end</th>
                </thead>
                <tr>

                  {/* Front-end */}
                  <td className="w-50">
                    <ul>
                      <li>React and React Native</li>
                      <li>Angular</li>
                      <li>Material UI and Bootstrap</li>
                      <li>Vue</li>
                      <li>Django</li>
                      <li>Typescript</li>
                      <li>HTML5 and CSS3</li>
                    </ul>
                  </td>

                  {/* Back-end */}
                  <td className="w-50">
                    <ul>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>Python</li>
                      <li>NoSQL databases like MongoDB</li>
                      <li>SQL databases like MySQL and MSSQL</li>
                      <li>...and of course, linux environments!</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </Box>

            <Box className="flex-col w-100">
              <h4>Here are a few well-known APIs I've worked with: </h4>
              <ul>
                <li>Google Maps API</li>
                <li>OpenAI API</li>
                <li>Python</li>
                <li>NoSQL databases like MongoDB</li>
                <li>SQL databases like MySQL and MSSQL</li>
                <li>...and of course, linux environments!</li>
              </ul>
            </Box>

            <Box className="flex-col w-100">
              <h4>I also have experience: </h4>
              <ul>
                <li>Deploying applications using Bitbucket and AWS Amplify.</li>
                <li>Express</li>
                <li>Python</li>
                <li>NoSQL databases like MongoDB</li>
                <li>SQL databases like MySQL and MSSQL</li>
                <li>...and of course, linux environments!</li>
              </ul>
            </Box>
          </Box>

          <Box className="flex-col rg-1">
            <span>
            I also have experience deploying these types of applications through AWS Amplify, Lightsail, and Route53. 
            On top of that, I've used many more of the AWS services to support applications I've built such as AWS 
            SQS and SNS.
            </span>
          </Box>
        </div>
      </div>

      <Modal 
        title={'Contact'} 
        content={<>
          Test
        </>} 
        open={contactInfoOpen} 
        onClose={() => setContactInfoOpen(false)}
      />
    </>
  );
}