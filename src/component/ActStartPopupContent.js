import React from "react";
import { ListItemText } from "@mui/material";

const QuizPopupContent = () => {
  return (
    <>
      {" "}
      <ListItemText sx={{ display: "list-item" }}>
        We are going to listen the audio instruction in English, decode the
        instruction and perform the action as per the instructions.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        Student can select the activity from the list of activities.
      </ListItemText>{" "}
      <ListItemText sx={{ display: "list-item" }}>
        Click on the audio icon to listen the instruction.
      </ListItemText>{" "}
      <ListItemText sx={{ display: "list-item" }}>
        Perform the activity as per the audio instructions.
      </ListItemText>{" "}
    </>
  );
};

export default QuizPopupContent;
