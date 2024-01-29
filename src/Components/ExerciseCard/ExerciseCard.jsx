import React from "react";
import "./ExerciseCard.css";

const ExerciseCard = ({ name, bodyPart, target, gifUrl }) => {
  return (<>
    <div className="flex-container">
      <div className="flex-item">
        <p className="name">{name}</p>
        <p className="info">Exercise: {bodyPart}</p>
        <p className="info">Primary Muscles: {target}</p>
      </div>
      <div className="flex-item">
        <img src={gifUrl} className="gif" />
      </div>
    </div>
      <hr />
      </>
  );
};

export default ExerciseCard;
