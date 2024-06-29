import React, {useState} from "react";
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';

// Import styles
import './Modal.scss';

// Import Components
import Button from "../Button/Button";

// Define the interface for the Moodal component
interface ModalProps {
  title: string;
  content: React.ReactNode;
  open: boolean;
  onClose: () => void;
  onOpen?: () => void;
  onSubmit?: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default (props: ModalProps) => {
  return (
    <Modal 
      open={props.open} 
      onClose={props.onClose} 
      className="modal" 
      slotProps={{
        backdrop: {
          style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' }
        }
      }}
    >
      <Grow in={props.open}>
        <Box className="modal-root">
          <div className="modal-header">
            <h2>{props.title}</h2>
          </div>
          <div className="modal-content">
            {props.content}
          </div>
          <div className="modal-footer">
            <Button 
              label="Close" 
              onClick={props.onClose} 
              variant="outlined" 
              size="medium" 
              type="primary"
            />
          </div>
        </Box>
      </Grow>
    </Modal>
  );
}