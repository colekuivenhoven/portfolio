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
        <Box className="opening-container g-3">

          {/* Image */}
          <Box className="image-container">
            <img src="./profile_pic_2.png" alt="Cole Kuivenhoven" />
          </Box>

          {/* Description */}
          <Box className="description-container">
            <div className="title">Cole Kuivenhoven</div>
            <div className="subtext">A Full-Stack Developer</div>
            <div className="actions">
              <Button 
                label="See My Projects" 
                onClick={() => window.location.href = "/projects"} 
                variant="text" 
                size="medium" 
                type="secondary"
                theme="dark"
              />
              <Button 
                label="Contact Me" 
                onClick={() => setContactInfoOpen(true)}
                variant="text" 
                size="medium" 
                type="secondary"
                theme="dark"
              />
            </div>
          </Box>
        </Box>

        <div className="text-container">
          <Box className="flex-col rg-1">
            <h3>My Experience at a Glance</h3>
            {/* <span>
              I've worked as a lead developer on full-stack applications in multiple capacities, as well as followed 
              agile project management methodologies while building these applications.
            </span> */}
            <span>
              We all have busy schedules, and you might not have time to read through my entire portfolio, so 
              below I've provided a brief overview of my various competencies in both front-end and back-end technologies.
            </span>
          </Box>
          <br/>

          <Box className="flex-col g-3 w-100">
            <Box className="flex-col w-100">
              <table>
                <thead>
                  <th>Languages</th>
                  <th>Front-End</th>
                  <th>Back-End</th>
                </thead>
                <tr>

                  {/* Languages */}
                  <td className="w-33">
                    <ul>
                      <li>Javascript/Typescript</li>
                      <li>Python</li>
                      <li>Java</li>
                      <li>C#</li>
                      <li>HTML5 + CSS3</li>
                    </ul>
                  </td>

                  {/* Front-end */}
                  <td className="w-33">
                    <ul>
                      <li>React</li>
                      <li>React Native</li>
                      <li>Angular</li>
                      <li>Vue</li>
                      <li>Django</li>
                      <li>Material UI</li>
                      <li>Bootstrap</li>
                      <li>SASS</li>
                    </ul>
                  </td>

                  {/* Back-end */}
                  <td className="w-33">
                    <ul>
                      <li>Node</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>MySQL</li>
                      <li>MSSQL</li>
                      <li>NGINX</li>
                      <li>AWS</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </Box>
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