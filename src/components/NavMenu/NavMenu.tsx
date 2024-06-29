import React, {useState} from "react";
import Tooltip from '@mui/material/Tooltip';

// Import Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Import styles
import './NavMenu.scss';

export default () => {
  return (
    <>
      <div className="nav-menu">
        {/* Home */}
        <span className={`nav-link-container ${window.location.pathname === "/" ? "active" : ""}`}>
          <a href="/">Home</a>
        </span>

        {/* About */}
        {/* <span className={`nav-link-container ${window.location.pathname === "/about" ? "active" : ""}`}>
          <a href="/about">About Me</a>
        </span> */}

        {/* Projects */}
        <span className={`nav-link-container ${window.location.pathname === "/projects" ? "active" : ""}`}>
          <a href="/projects">Projects</a>
        </span>

        {/* Work */}
        <span className={`nav-link-container ${window.location.pathname === "/work" ? "active" : ""}`}>
          <a href="/work">Work History</a>
        </span>

        {/* Logo */}
        <span className={`logo`}>
          <Tooltip 
            title={<span className="tooltip-text">Find out how to get in touch with me!</span>}
            placement="bottom" 
            arrow
          >
          <a className="text" href="/about"><AccountCircleIcon/>&nbsp;<span className="name">Cole Kuivenhoven</span></a>
          </Tooltip>
        </span>
      </div>
    </>
  );
}