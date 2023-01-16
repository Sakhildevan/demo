import React, { useState,useEffect } from 'react';
import {cities, calculateTotalDistance, hillClimbing} from './tspSolver'
import { euclideanDistance } from './tspSolver'

function TspVisualization() {
  const [currentSolution, setCurrentSolution] = useState([]);
  const [currentDistance, setCurrentDistance] = useState(0);
 
  useEffect(() => {
    
    const solution = hillClimbing(cities, euclideanDistance);
    setCurrentSolution(solution);
    setCurrentDistance(calculateTotalDistance(solution, euclideanDistance));
   
  },
    []);
  
  const handleStartClick = () => {
    const solution = hillClimbing(cities, euclideanDistance);
    setCurrentSolution(solution);
    setCurrentDistance(calculateTotalDistance(solution, euclideanDistance));
    }
  

 
  
  return (
    <div>
      <button onClick={handleStartClick}>Start</button>
        
      <div>
        <p>Current solution: {currentSolution.map(city => city.name).join(', ')}</p>
        <p>Current distance: {currentDistance}</p>
      </div>
    </div>
  );
}

export default TspVisualization;