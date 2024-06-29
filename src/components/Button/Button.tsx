import React, {useState} from "react";
import { Button } from "@mui/material";

// Import styles
import './Button.scss';

// Define the interface for the Button component
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  type?: "primary" | "secondary";
}

export default (props: ButtonProps) => {
  return (
    <>
      <Button 
        className={`btn ${props.type}`}
        onClick={props.onClick} 
        variant={props.variant}
        size={props.size}
      >
        {props.icon && <>{props.icon}&nbsp;</>}{props.label}
      </Button>
    </>
  );
}