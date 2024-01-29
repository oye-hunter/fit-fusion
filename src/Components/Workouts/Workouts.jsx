import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Workouts.css"
import ExerciseCard from "../ExerciseCard/ExerciseCard";

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': '6df5caac75msh139185c62a1dda5p1d57c5jsn1317e325fa10',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

const Workouts = () => {
 const [exerciseData, setExerciseData] = useState([]);
 const location = useLocation();
 const isWorkoutsPage = location.pathname === "/workouts";

 const getExercises = async () => {
  try {
    const response = await axios.request(options);
    setExerciseData(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
 };

 useEffect(() => {
      getExercises();
 }, []);

 return (
    <div>
      {exerciseData.length > 0 ? (
        <div>
            {exerciseData.map((exercise) => (
                <ExerciseCard name={exercise.name.toUpperCase()} bodyPart={exercise.bodyPart} target={exercise.target} gifUrl={exercise.gifUrl}/>
          ))}
        </div>
      ) : (
        <p>Loading exercises...</p>
      )}
    </div>
 );
};

export default Workouts;


