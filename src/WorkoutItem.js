import React from "react";
import { Typography } from "@mui/material";
import "./WorkoutItem.css"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const WorkoutItem = ({name , weight, sets}) => {
    return (
        <div  className="Item">
            <span >{name}</span>
            <span>{weight}</span>
            <span>{sets}</span> 
        </div>
    );
}

export default WorkoutItem;