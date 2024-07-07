import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

// Import styles
import './InfoCard.scss';

// Import Components
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

// Define the interface for the InfoCard component
interface InfoCardProps {
  title: string;
  description: string;
  full_description?: React.ReactNode;
  image: string;
  tags?: string[];
}

export default (props: InfoCardProps) => {
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);

  return (
    <>
      <div className="info-card">
        <div className="info-card-image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="info-card-content">
          <span className="title">{props.title}</span>
          <span className="description">{props.description}</span>
          {props.tags && (
            <div className="tags">
              {props.tags.map((tag, index) => (
                <span className="tag" key={"tags_"+index}>{tag}</span>
              ))}
            </div>
          )}
          <Button 
            label="More Details" 
            onClick={() => setMoreInfoOpen(true)}
            variant="text" 
            size="small" 
            type="secondary"
          />
        </div>
      </div>
      <Modal 
        title={props.title} 
        content={props.full_description} 
        open={moreInfoOpen} 
        onClose={() => setMoreInfoOpen(false)}
      />
    </>
  );
}