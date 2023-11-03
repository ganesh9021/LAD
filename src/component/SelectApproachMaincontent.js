import React from "react";
import SAS from "../image/sawaseed/sasthumbnail.png";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";

export const SelectApproachMaincontent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="row"
        style={{ height: "100%", width: "93vw", overflow: "auto" }}
      >
        <div className="col animate__animated animate__bounceInDown d-flex justify-content-center align-items-center mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={SAS} />
            <Card.Body className="text-center">
              <Card.Title>Saw a seed</Card.Title>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/launchpage/englishactivity/sas");
                }}
              >
                Lets Go!
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
