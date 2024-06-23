import React, {useState} from "react";

// Import styles
import './InfoCard.scss';

// Define the interface for the InfoCard component
interface InfoCardProps {
  title: string;
  description: string;
  image: string;
}

export default (props: InfoCardProps) => {
  return (
    <>
      <div className="info-card">
        <div className="info-card-image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="info-card-content">
          <span className="title">{props.title}</span>
          <span className="description">{props.description}</span>
        </div>
      </div>
    </>
  );
}